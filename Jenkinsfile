pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/rettrich/ciCdPlayground'
                sh 'yarn'
                sh 'yarn build'
            }
        }

        stage('Test') {
            steps {
                sh 'yarn test'
                sh 'yarn test:e2e'
            }
        }

        stage('Publish') {
            steps {
                junit 'reports/*.xml'
            }
        }
    }
}