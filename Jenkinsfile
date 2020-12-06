pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                dir('server') {
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
    }
}