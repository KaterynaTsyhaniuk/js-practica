'use strict';

function getSubscriptionPrice(type) {
  switch (type) {
    case 'starter':
      return 0;
    case 'professional':
      return 20;
    case 'organization':
      return 50;
    default:
      return 'Invalid subscription type!';
  }
}
console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('premium'));
