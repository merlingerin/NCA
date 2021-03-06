import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-experts-qa',
  templateUrl: 'experts-qa.html',
})
export class ExpertsQaPage {
  page$: any;
  email: object = {};
  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });

  constructor(
    public navCtrl: NavController, 
    public db: AngularFireDatabase, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public emailComposer: EmailComposer) {
  }

  ngOnInit() {
    this.loader.present();
    let that = this;
    async function getContent() {
      that.page$ = await that.db.object('askTheExperts').valueChanges();      
      that.loader.dismiss();
    }
    getContent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpertsQaPage');
  }

  sendMail() {
    let email = {
      to: 'emailtestprojects@gmail.com',
      cc: '',
      attachments: [],
      subject: 'New question from CNA.',
      body: `Sender email: ${this.email["email"]} \r\n\r\n,  Queastion: ${this.email["body"]}`
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  navback() {
    this.navCtrl.popToRoot();
  }
}
