pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Build') {
            steps {
                git checkout 'https://github.com/rettrich/ciCdPlayground'
                yarn
                yarn build
            }
        }

        stage('Test') {
            steps {
                yarn test
                yarn test:e2e
            }
        }

        stage('Publish') {
            steps {
                junit 'reports/*.xml'
            }
        }
    }
}