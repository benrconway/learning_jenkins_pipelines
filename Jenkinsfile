pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Attempting to run.'
                sh 'npm run Leeroy'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing.. and stuff'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

// how does this change things
// pipeline {
//     agent any
//     stages {
//         stage('Build') {
//             steps {
//                 echo "building..."
//             }
//         }
//         stage('Test'){
//             steps {
//                 sh ''
//                 junit 'reports/**/*.xml'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh 'make publish'
//             }
//         }
//     }
// }
