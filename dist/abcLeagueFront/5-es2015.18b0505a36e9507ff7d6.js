(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EBc4:function(r,t,n){"use strict";n.r(t),n.d(t,"PaymentVerificationModule",(function(){return b}));var e=n("ofXK"),o=n("fXoL"),s=n("tyNb"),i=n("c1R7");const c=[{path:"",component:(()=>{class r{constructor(r,t){this.route=r,this.daService=t,this.orderInfo={}}ngOnInit(){this.id=this.route.snapshot.paramMap.get("paymentId"),this.sub=this.daService.verifyOrder(this.id).subscribe(r=>this.orderInfo=r)}ngOnDestroy(){this.sub.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(o.Kb(s.a),o.Kb(i.a))},r.\u0275cmp=o.Eb({type:r,selectors:[["app-feature"]],decls:10,vars:6,consts:[[1,"order-verification"]],template:function(r,t){1&r&&(o.Pb(0,"section",0),o.Pb(1,"h2"),o.rc(2,"Order information:"),o.Ob(),o.Pb(3,"p"),o.rc(4),o.Pb(5,"b"),o.rc(6),o.Ob(),o.Ob(),o.Lb(7,"br"),o.rc(8," Here is "),o.rc(9," your code: "),o.Ob()),2&r&&(o.zb(4),o.vc(" ",t.orderInfo.description," account bought by ",t.orderInfo.firstname," ",t.orderInfo.lastname," through ",t.orderInfo.payment," in amount of ",t.orderInfo.quantity," has been "),o.zb(2),o.sc(t.orderInfo.status))},styles:[""]}),r})()}];let a=(()=>{class r{}return r.\u0275mod=o.Ib({type:r}),r.\u0275inj=o.Hb({factory:function(t){return new(t||r)},imports:[[s.g.forChild(c)],s.g]}),r})(),b=(()=>{class r{}return r.\u0275mod=o.Ib({type:r}),r.\u0275inj=o.Hb({factory:function(t){return new(t||r)},imports:[[e.c,a]]}),r})()}}]);