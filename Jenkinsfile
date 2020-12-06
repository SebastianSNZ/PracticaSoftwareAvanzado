pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'cd server'
                sh 'npm install'
                sh 'npm start' 
            }
        }
    }
}