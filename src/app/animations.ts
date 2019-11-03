import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const Animations =
  trigger('routeAnimations', [
    transition('top => createJs', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(400px)', opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('.3s ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('.3s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('createJs => top', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('.3s ease-in', style({ transform: 'translateY(400px)', opacity: 0 }))
        ]),
        query(':enter', [
          animate('.3s ease-in', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
