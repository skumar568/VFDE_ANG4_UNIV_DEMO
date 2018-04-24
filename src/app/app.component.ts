import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">

        <div class="collapse navbar-collapse topnav">
            <ul class="nav navbar-nav navbar-right">
                <li>
                <input type="text" placeholder="Search..">
                <li>
            </ul>
            <ul class="nav navbar-nav">

                <li>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Mobifunk </a>

                </li>
                <li>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Internet </a>

                 </li>
                 <li>
                 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Darum Vodaphone </a>

             </li>
                <li class="dropdown">

                    <button class="dropbtn">Vodaphone Login</button>
                    <div class="row dropdown-menu dropdown-content">
                       <ul class="col-sm-3">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                        </ul>
                        <ul class="col-sm-3">
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                        </ul>
                        <ul class="col-sm-3">
                        <li class="">
                            Login
                            <div class="">
                            <input type="text" placeholder="Username..">
                            <input type="text" placeholder=" Internet Password..">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Forgot Username</a>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Forgot Password</a>
                            <button (click)="onClickMe()">Login</button>
                            </div>
                        </li>
                        </ul>
                        <ul class="col-sm-3">
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                        </ul>
                    </div>
                </li>

            </ul>
        </div><!--/.nav-collapse -->
    </div>
</div>

<div class="container">
    <div class="navbar-template text-center">

    </div>
</div>


  `,
  styles: []
})
export class AppComponent {

    onClickMe() {

    }
}
