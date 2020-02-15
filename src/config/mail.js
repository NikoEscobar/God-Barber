import mailtrapAuth from '../../auths/mailtrap';

export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: { ...mailtrapAuth },
  default: {
    from: 'Equipe God Barber <noreply@godbarber.com>',
  },
};
