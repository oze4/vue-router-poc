pipeline {
  agent { dockerfile true }
  stages {
    stage('Build') {
      steps {
        sh "cd /var/lib/jenkins/workspace/vue-router-poc"
        sh "docker build -t oze4/vue-router-poc ."
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        withDockerRegistry([credentialsId: 'docker-hub-creds', url: 'https://registry.hub.docker.com']) {
          sh "cd /var/lib/jenkins/workspace/vue-router-poc"
          sh "docker push oze4/vue-router-poc:${env.BUILD_NUMBER}"
          sh "docker push oze4/vue-router-poc:latest"
        }
      }
    }
  }
}
