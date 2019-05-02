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

    stage ('SSH To Docker Host and Deploy') {
        sshagent(credentials : ['ost-sf-dckr-00']) {
            sh '''
ssh -v root@ost-sf-dckr-00 <<EOF
echo "--------------------------------"
echo "---- pulling latest image ------"
echo "--------------------------------"
docker pull oze4/vue-router-poc:latest
echo "--------------------------------"
echo "--------------------------------"
echo "--- stopping existing image ----"
echo "--------------------------------"
docker stop vue-router-poc
echo "--------------------------------"
echo "--------------------------------"
echo "--- removing existing image ----"
echo "--------------------------------"
docker rm vue-router-poc
echo "--------------------------------"
echo "--------------------------------"
echo "------ starting new image ------"
echo "--------------------------------"
docker run -d --name vue-router-poc --net nginx-proxy -e VIRTUAL_HOST=vrpoc.ostrike.com CERT_NAME=shared oze4/vue-router-poc:latest
echo "--------------------------------"
echo "--------------------------------"
echo "----------- DONE ---------------"
echo "--------------------------------"
echo "--------------------------------"
EOF
'''
        }
    }
}
