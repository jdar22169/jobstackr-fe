module.exports = function(app) {
  app.factory('globals', function() {
    let service = {};

    service.eventTypes = [{
      id: 1,
      label: 'Application Submitted',
      value: 1,
      icon: 'checkbox-checked'
    },
    {
      id: 2,
      label: 'Phone Screen',
      value: 2,
      icon: 'phone'
    },
    {
      id: 2,
      label: 'Email',
      value: 2,
      icon: 'mail4'
    },
    {
      id: 3,
      label: 'Phone Interview',
      value: 2,
      icon: 'bubble3'
    },
    {
      id: 4,
      label: 'In Person Interview',
      value: 2,
      icon: 'man-women'
    }
  ];

    return service;
  });
};
