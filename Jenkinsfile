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
        stage('Test') { 
            steps {
                dir('server') {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('frontend') {
                    sh 'cp index.html /var/www/html'
                    sh 'cp index.html /etc/puppetlabs/code/environments/production/modules/mymodule'
                }
            }
        }
    }
}