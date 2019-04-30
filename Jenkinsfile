pipeline {
  agent { label 'docker' }
  options {
    ansiColor colorMapName: 'XTerm'
  }
  stages {
    stage('Build') {
      steps {
        sh "docker build -t oze4/vue-router-poc ."
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        withDockerRegistry([credentialsId: 'docker-hub-creds', url: 'https://registry.hub.docker.com']) {
          sh "docker push oze4/vue-router-poc:${env.BUILD_NUMBER}"
          sh "docker push oze4/vue-router-poc:latest"
        }
      }
    }
  }
}
