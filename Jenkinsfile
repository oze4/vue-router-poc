node {
    def app

    stage('Clone Repository') {
        checkout scm
    }

    stage('Build Image') {
        app = docker.build("oze4/vue-router-poc")
    }

    stage('Test Image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push Image To Docker Hub') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

}
