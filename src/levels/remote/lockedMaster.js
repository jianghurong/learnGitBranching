exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C2\",\"id\":\"feature\",\"remoteTrackingBranchID\":\"o/feature\"},\"o/feature\":{\"target\":\"C2\",\"id\":\"o/feature\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"feature\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C2\",\"id\":\"feature\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git reset --hard o/master;git checkout -b feature C2; git push origin feature",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "hint": {
    "en_US": "Make the feature branch from the local master before resetting it back to be the same as origin's master",
    "ru_RU": "Создайте новую feature ветвь от master перед тем, как откатить изменения в master до состояния o/master."
  },
  "name": {
    "en_US": "Locked Master",
    "ru_RU": "Заблокированная ветвь master"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote Rejected!",
              "",
              "If you work on a large collaborative team its likely that master is locked and requires some Pull Request process to merge changes. If you commit directly to master locally and try pushing you will be greeted with a message similar to this:",
              "",
              "```",
              " ! [remote rejected] master -> master (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Why was it rejected?",
              "",
              "The remote rejected the push of commits directly to master because of the policy on master requiring pull requests to instead be used.",
              "",
              "You meant to follow the process creating a branch then pushing that branch and doing a pull request, but you forgot and committed directly to master. Now you are stuck and cannot push your changes."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The solution",
              "",
              "Create another branch called feature and push that to the remote. Also reset your master back to be in sync with the remote otherwise you may have issues next time you do a pull and someone else's commit conflicts with yours."
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote Rejected!",
              "",
              "Когда вы работаете в составе большой команды разработчиков над проектом, то, вероятнее всего, ветвь `master` будет _заблокирована_. Для внесения изменений в неё в git существует понятие запроса на слияние `Pull Request`. В такой ситуации если вы закоммитите свои наработки непосредственно в `master` ветвь, а после выполните `git push`, то будет сгенерировано сообщение об ошибке:",
              "",
              "```",
              " ! [remote rejected] master -> master (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)",
              "```",
              "",
              "```",
              " ! [удалённо отклонено] master -> master (TF402455: Изменение этой ветви запрещены; вы можете использовать pull request для обновления этой ветви.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Почему произошло отклонение моих изменений?",
              "",
              "Удалённый репозиторий отклонил загруженные коммиты непосредственно в `master` ветку потому, что на `master` _настроена политика_, которая требует использование `Pull request` вместо обычного `git push`.",
              "",
              "Эта политика подразумевает процесс создания новой ветви разработки, внесение в неё всех необходимых коммитов, загрузка изменений в удалённый репозиторий и _открытие нового_ `Pull request`. Однако вы забыли про это и закоммитили наработки непосредственно в `master` ветвь. Теперь вы застряли и не можете запушить свои изменения :(. "
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Решение:",
              "",
              "Создайте ещё одну ветвь под названием `feature` и отправьте изменения на удалённый репозиторий. Так же не забудьте вернуть вашу локальную `master` ветвь в исходное состояние (чтобы она была синхронизирована с удалённой). В противном случае у вас могут возникнуть проблемы при следующем выполнении `git pull`."
            ]
          }
        }
      ]
    }
  }
};