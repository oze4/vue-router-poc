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

    stage ('Deploy') {
        sshagent(credentials : ['ost-sf-dckr-00']) {
            sh 'ssh -v root@ost-sf-dckr-00 "docker pull oze4/vue-router-poc:latest; docker stop vue-router-poc; docker rm vue-router-poc; docker run -d --name vue-router-poc --expose 80 --net nginx-proxy -e VIRTUAL_HOST=vrpoc.ostrike.com oze4/vue-router-poc:latest"'
        }
    }
}
