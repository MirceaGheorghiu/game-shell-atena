// 6129201374-255tl0icb9l90ncu4lhek9m7vm1hkka4.apps.googleusercontent.com

let initialized = false;
const clientId =
  '6129201374-255tl0icb9l90ncu4lhek9m7vm1hkka4.apps.googleusercontent.com';

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log(response);
        },
        scope: 'email profile',
      });

      resolve();
      initialized = true;
    });
  });
};
