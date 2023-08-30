pipeline { 
    agent any
    environment {
        HOME = "${WORKSPACE}"
        GIT_REPO = 'MISW4201-202314-Frontend-Grupo12'
        GITHUB_TOKEN_ID = '43771338-0057-4a96-ae03-93ee5419d871'
    }
    stages {
        stage('Checkout') { 
            steps {
                scmSkip(deleteBuild: true, skipPattern:'.*\\[ci-skip\\].*')
                git branch: 'main',  
                credentialsId: env.GITHUB_TOKEN_ID,
                url: 'https://github.com/MISW-4101-Practicas/' + env.GIT_REPO
            }
        }
        stage('Gitinspector') {
            steps {
                script {
                    docker.image('gitinspector-isis2603').inside('--entrypoint=""') {
                        sh '''
                            mkdir -p ./reports/
                            gitinspector --file-types="py" --format=html --AxU -w -T -x author:Bocanegra -x author:estudiante > ./reports/index.html
                        '''
                    }
                }
                withCredentials([usernamePassword(credentialsId: env.GITHUB_TOKEN_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    sh('git config --global user.email "ci-isis2603@uniandes.edu.co"')
                    sh('git config --global user.name "ci-isis2603"')
                    sh('git add ./reports/index.html')
                    sh('git commit -m "[ci-skip] GitInspector report added"')
                    sh('git pull https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/MISW-4101-Practicas/${GIT_REPO} main')
                    sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/MISW-4101-Practicas/${GIT_REPO} main')
                }  
            }
        }
    }
    post { 
      always { 
         // Clean workspace
         cleanWs deleteDirs: true
      }
   }
}
