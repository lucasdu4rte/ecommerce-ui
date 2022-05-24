def pipelineConfig = [
    environments: [
      develop: [
        REACT_APP_NODE_ENV:"development",
      ],
      main: [
        REACT_APP_NODE_ENV:"staging",
      ],
      release: [
        REACT_APP_NODE_ENV:"production",
      ],
    ],
    deploy: [
        develop: [
            USE_ENV: 'develop',
            TAG_RELEASE: false,
            ENVIRONMENT: 'st-dev',
            STORAGE_ACCOUNT: 'dev'
        ],
        main: [
            USE_ENV: 'main',
            TAG_RELEASE: true,
            ENVIRONMENT: 'st-hml',
            STORAGE_ACCOUNT: 'hml'
        ],
        release: [
            USE_ENV: 'release',
            TAG_RELEASE: true,
            ENVIRONMENT: 'st-prd',
            STORAGE_ACCOUNT: 'prd'
        ]
    ]
]

def buildEnvVarList = { envVarMap ->
  return envVarMap.collect({ key, value -> "${key}=${value}" })
}

def fortifyVersion(pipelineConfig) {
  return pipelineConfig.environments.keySet().contains(env.GIT_BRANCH) ? pipelineConfig.environments[env.GIT_BRANCH].fortifyVersion : "develop"
}

def setPath() {
  return sh (script: ". nvmuse .nvmrc", returnStdout: true).trim()
}

pipeline {
    agent { node { label "linux && nodejs" }}

    options {
        timeout(time: 1, unit: 'HOURS')
    }

    environment {
        PATH=setPath()
        PROJECT_NAME="ecommerce-ui"
        VERSION="1.0.0"
        REVISION="${env.BUILD_NUMBER}"
        STORAGE_DEPLOY_DIRECTORY = "ecommerce"

        // Azure
        AZURE_APP_ID = credentials('azureAppId')
        AZURE_APP_PASS = credentials('azureAppPass')
    }

    stages {
        stage('Info') {
            steps {
                sh 'git remote -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm cache clean --force && npm ci'
            }
        }
        stage('Lint') {
            steps {
                echo "Linting..."
                // sh 'npm run lint'
            }
        }
        stage('Tests') {
            when { expression { env.GIT_BRANCH.equals('main') || env.GIT_BRANCH.equals('release') } }
            steps {
                sh 'npm run test'
            }
        }
        stage('Scan SonarQube') {
            when { expression { pipelineConfig.deploy.keySet().contains(env.GIT_BRANCH) } }
            steps {
                script {
                    echo "Scaning..."
                }
            }
        }
        stage('Build') {
            when { expression { pipelineConfig.deploy.keySet().contains(env.GIT_BRANCH) } }
            steps {
                script {
                  def config = pipelineConfig.deploy[env.GIT_BRANCH]
                  def env = pipelineConfig.environments[config.USE_ENV]
                  def envList = buildEnvVarList( env << ["WORKSPACE": "${WORKSPACE}"] )
                  withEnv(envList) {
                    sh 'npm run build'
                  }
                }
            }
        }
  
        stage('AZ login') {
            when { expression { pipelineConfig.deploy.keySet().contains(env.GIT_BRANCH) } }
            steps {
                echo "az loggin..."
            }
        }
        stage('Deploy') {
            when { expression { pipelineConfig.deploy.keySet().contains(env.GIT_BRANCH) } }
            steps {
                script {
                    echo "deploing..."
             
                }
            }
        }
    }
}
