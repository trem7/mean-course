(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(n,t,i){"use strict";i.r(t);var e=i("ofXK"),a=i("3Pt+"),o=i("rhD1"),r=i("tyNb"),s=i("fXoL"),c=i("qXBG"),u=i("Wp6s"),b=i("Xa2L"),m=i("kmnG"),l=i("qFsG"),d=i("bTqV");function p(n,t){1&n&&s.Ob(0,"mat-spinner")}function g(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a vaild email."),s.Rb())}function f(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a valid password."),s.Rb())}function h(n,t){1&n&&(s.Sb(0,"button",9),s.wc(1,"Login"),s.Rb())}function v(n,t){if(1&n){const n=s.Tb();s.Sb(0,"form",2,3),s.ac("submit",(function(){s.pc(n);const t=s.nc(1);return s.ec().onLogin(t)})),s.Sb(2,"mat-form-field"),s.Ob(3,"input",4,5),s.vc(5,g,2,0,"mat-error",0),s.Rb(),s.Sb(6,"mat-form-field"),s.Ob(7,"input",6,7),s.vc(9,f,2,0,"mat-error",0),s.Rb(),s.vc(10,h,2,0,"button",8),s.Rb()}if(2&n){const n=s.nc(4),t=s.nc(8),i=s.ec();s.Bb(5),s.jc("ngIf",n.invalid),s.Bb(4),s.jc("ngIf",t.invalid),s.Bb(1),s.jc("ngIf",!i.isLoading)}}function S(n,t){1&n&&s.Ob(0,"mat-spinner")}function w(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a vaild email."),s.Rb())}function I(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a valid password."),s.Rb())}function y(n,t){1&n&&(s.Sb(0,"button",9),s.wc(1,"Signup"),s.Rb())}function L(n,t){if(1&n){const n=s.Tb();s.Sb(0,"form",2,3),s.ac("submit",(function(){s.pc(n);const t=s.nc(1);return s.ec().onSignup(t)})),s.Sb(2,"mat-form-field"),s.Ob(3,"input",4,5),s.vc(5,w,2,0,"mat-error",0),s.Rb(),s.Sb(6,"mat-form-field"),s.Ob(7,"input",6,7),s.vc(9,I,2,0,"mat-error",0),s.Rb(),s.vc(10,y,2,0,"button",8),s.Rb()}if(2&n){const n=s.nc(4),t=s.nc(8),i=s.ec();s.Bb(5),s.jc("ngIf",n.invalid),s.Bb(4),s.jc("ngIf",t.invalid),s.Bb(1),s.jc("ngIf",!i.isLoading)}}const j=[{path:"login",component:(()=>{class n{constructor(n){this.authService=n,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(n=>{this.isLoading=!1})}onLogin(n){n.invalid||(this.isLoading=!0,this.authService.login(n.value.email,n.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(s.Nb(c.a))},n.\u0275cmp=s.Hb({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","primary","type","submit",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,t){1&n&&(s.Sb(0,"mat-card"),s.vc(1,p,1,0,"mat-spinner",0),s.vc(2,v,11,3,"form",1),s.Rb()),2&n&&(s.Bb(1),s.jc("ngIf",t.isLoading),s.Bb(1),s.jc("ngIf",!t.isLoading))},directives:[u.a,e.k,b.b,a.p,a.j,a.k,m.b,l.a,a.a,a.i,a.l,a.n,a.b,m.a,d.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(n){this.authService=n,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(n=>{this.isLoading=!1})}onSignup(n){n.invalid||(this.isLoading=!0,this.authService.createUser(n.value.email,n.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(s.Nb(c.a))},n.\u0275cmp=s.Hb({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","primary","type","submit",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,t){1&n&&(s.Sb(0,"mat-card"),s.vc(1,S,1,0,"mat-spinner",0),s.vc(2,L,11,3,"form",1),s.Rb()),2&n&&(s.Bb(1),s.jc("ngIf",t.isLoading),s.Bb(1),s.jc("ngIf",!t.isLoading))},directives:[u.a,e.k,b.b,a.p,a.j,a.k,m.b,l.a,a.a,a.i,a.l,a.n,a.b,m.a,d.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let M=(()=>{class n{}return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[r.e.forChild(j)],r.e]}),n})();i.d(t,"AuthModule",(function(){return O}));let O=(()=>{class n{}return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[e.c,o.a,a.g,M]]}),n})()}}]);