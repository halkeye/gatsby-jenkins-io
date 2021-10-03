pipeline {
  agent {
    docker {
      image 'node:16'
    }
  }

  environment {
    HOME = "${WORKSPACE}"
    NPM_CONFIG_PREFIX=".npm"
    NPM_CONFIG_CACHE="npm_cache"
    GATSBY_CONFIG_SITE_METADATA__URL="https://halkeye.github.io/gatsby-jenkins-io/"
    GATSBY_CONFIG_SITE_METADATA__SITE_URL="https://halkeye.github.io/gatsby-jenkins-io/"
    GATSBY_CONFIG_PATH_PREFIX="/gatsby-jenkins-io/"
  }

  options {
    timeout(time: 60, unit: 'MINUTES')
    ansiColor('xterm')
    disableConcurrentBuilds()
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    /*stage('Lint') {*/
    /*  steps {*/
    /*    sh 'yarn lint'*/
    /*  }*/
    /*}*/

    /*stage('Test') {*/
    /*  steps {*/
    /*    sh 'yarn test'*/
    /*  }*/
    /*}*/

    stage('Build') {
      steps {
        sh 'npm run build -- --prefix-paths'
      }
    }

    stage('Deploy') {
      when { branch 'master' }
      environment {
        GITHUB = credentials('github-halkeye')
        DEPLOY_URL = env.GIT_URL.replace("https://", "https://${GITHUB}@")
      }
      steps {
        sh '''
          git config --global user.email "jenkins@gavinmogan.com"
          git config --global user.name "jenkins.gavinmogan.com"

          git remote set-url origin "${DEPLOY_URL}"
          gh-pages -d public
        '''
      }
    }
  }
}
