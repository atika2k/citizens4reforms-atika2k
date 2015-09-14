i18n.map('mk', {
  global: {
    save: 'Зачувај',
    create: 'Креирај',
    logout: 'Одлогирај Се',
    back: 'Назад',
    cancel: 'Откажи',
    delete: 'Избриши',
    confirm: 'Потврди',
    choose: 'Одбери',
    noPermission: 'Немате пристап',
    passwordNotMatch: 'Лозинките не се совпаѓаат',
    optional: 'Опционо'
  },
  accounts: {
    schema: {
      emails: {
        title: 'е-маил_ови',
        address: 'Адреса',
        verified: 'Верифицирана'
      },
      password: {
        title: 'Лозинка',
        new: 'Нова Лозинка',
        confirm: 'Потврди ја Лозинката'
      },
      profile: {
        name: 'Име'
      }
    },
    index: {
      title: 'Профил',
      actions: {
        edit: 'Измени',
      },
      tableTitles: {
        name: 'Име',
        email: 'е-маил',
        roles: 'Улоги',
        actions: 'Акции'
      }
    },
    update: {
      title: 'Ажурирај го профилот',
      messages: {
        noPermissions: 'Немате право да го ажурирате овој корисник'
      },
      sections: {
        profile: {
          title: 'Профил'
        },
        roles: {
          title: 'Улоги',
          selectRoles: 'Селектирај корисничка улога'
        },
        changePassword: {
          title: 'Смени ја лозинката'
        },
        deleteUser: {
          title: 'Избриши !!!',
          advice: 'Бришењето корисници може да направи проблеми.',
          button: 'Избриши го корисникот'
        }
      }
    },
    myAccount: {
      title: 'Мој профил',
    },
    create: {
      title: 'Креирај корисник',
      createInvitation: 'Креирај покана',
      createUserNow: 'Креирај корисник сега',
      inviteOther: 'Покани останати',
      selectRoles: 'Селектирај нови кориснички улоги',
      email: 'е-маил',
      messages: {
        successfullyCreated: 'Поканата е успешно креирана'
      }
    },
    changePassword: {
      title: 'Смени ја лозинката',
    },
    updateProfile: {
      title: 'Ажурирај го профилот',
    },
    register: {
      title: 'Регистрација',
      registerButton: 'Регистрација',
      fields: {
        email: 'е-маил',
        name: 'Име',
        password: 'Лозинка',
        confirmPassword: 'Лозинка (повторно)'
      },
      messages: {
        invalidEmail: 'Погрешен е-маил',
        invalidInvitationCode: 'Погрешен код за покана',
      }
    }
  },
  collections: {
    create: {
      title: 'Додај {$1}'
    },
    update: {
      title: 'Ажурирај {$1}'
    },
    delete: {
      title: 'Избриши {$1}',
      confirmQuestion: 'Дали сте сигурни дека сакате да избришете {$1}?'
    },
    common: {
      defaultPluralName: 'предмети',
      defaultSingularName: 'предмет',
    }
  },
  config: {
    update: {
      title: 'Конфигурација',
    }
  },
  dictionary: {
    update: {
      title: 'За проектот'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Фајлот не е пронајден [{$i}]',
      errorUploading: 'Грешка при аплоадирање фајл',
      errorRemoving: 'Грешка при бришење фајл',
    }
  },
  pages: {
    schema: {
      title: 'Наслов',
      url: 'Урл',
    },
    index: {
      title: 'Страници',
    },
    create: {
      title: 'Креирај Страница',
      chooseTemplate: 'Избери темплејт'
    },
    update: {
      title: 'Ажурирај страница',
    },
    delete: {
      title: 'Избриши страница',
      confirmQuestion: 'Дали сте сигурни дека сакате да ја избришете оваа страница?'
    }
  },
  attributes: {
    users: {
      pluralName: 'Корисници',
      singularName: 'Корисник',
    },
    file: {
      choose: 'Изберете фајл',
      noFile: 'Нема фајл',
    },
    image: {
      choose: 'Изберете слика'
    },
    images: {
      choose: 'Изберете слики'
    }
  },
  tabular: {
    search: 'Пребарај:',
    info: 'Прикажани се _START_ до _END_ од _TOTAL_ внесувања',
    infoEmpty: 'Прикажани се 0 до 0 of 0 внесувања',
    lengthMenu: 'Прикажани се _MENU_ внесувања',
    emptyTable: 'Нема податоци.',
    paginate: {
      first: 'Прво',
      previous: 'Претходно',
      next: 'Следно',
      last: 'Последно',
    }
  }
});