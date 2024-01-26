pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Build') {
            steps {
                step {
                    git 'https://github.com/rettrich/ciCdPlayground'
                }
                step {
                    sh 'yarn'
                    sh 'yarn build'
                }
            }
        }

        stage('Test') {
            steps {
                step {
                    sh 'yarn test'
                    sh 'yarn test:e2e'
                }
            }
        }

        stage('Publish') {
            steps {
                step {
                    junit 'reports/*.xml'
                }
            }
        }
    }
}