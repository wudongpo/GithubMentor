
var github = new OAuth2('github', {
    client_id: '24ad7837a33af8822b72',
    client_secret: 'f1ec9aed29ccf92b032c64b9e81871c8d71ddf79',
    api_scope: 'user,public_repo,repo,gist'
  });

function authorize(providerName) {	
    var provider = window[providerName];
    provider.authorize(checkAuthorized);
  }

  function clearAuthorized() {
    console.log('clear');
    ['github'].forEach(function(providerName) {
      var provider = window[providerName];
      provider.clearAccessToken();
    });
    checkAuthorized();
  }

  function checkAuthorized() {
    console.log('checkAuthorized');
    ['github'].forEach(function(providerName) {
      var provider = window[providerName];
      var button = document.querySelector('#' + providerName);
      if (provider.hasAccessToken()) {
        button.classList.add('authorized');
      } else {
        button.classList.remove('authorized');
      }
    });
  }

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button#github').addEventListener('click', function() { authorize('github'); });
  checkAuthorized();
});