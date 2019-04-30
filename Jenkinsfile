pipeline {
    agent { dockerfile true }
    stages {
        stage('docker:build') {
            steps {
                sh 'docker build -t oze4/vue-router-poc:latest .'
            }
        }
        stage('docker:push') {
            steps {
                sh 'docker push oze4/vue-router-poc:latest'
            }
        }
    }
}