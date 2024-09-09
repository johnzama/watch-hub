pipeline {
    agent any

    environment {
        // Define environment variables
        REGISTRY = "your-dockerhub-username"
        IMAGE_NAME = "watch-hub-app"
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials-id' // Jenkins credentials ID for Docker Hub
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/johnzama/watch-hub.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build React Application') {
            steps {
                // Build the React application for production
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                sh 'docker build -t $REGISTRY/$IMAGE_NAME:$BUILD_NUMBER .'
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Login to Docker Hub
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }

                    // Push Docker image to registry
                    sh 'docker push $REGISTRY/$IMAGE_NAME:$BUILD_NUMBER'
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                // Deploy the Docker container (customize this step based on your deployment environment)
                sh 'docker run -d -p 5000:3000 --name watch-hub-container $REGISTRY/$IMAGE_NAME:$BUILD_NUMBER'
            }
        }
    }

    post {
        always {
            // Clean up Docker environment
            sh 'docker system prune -f'
        }
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}

