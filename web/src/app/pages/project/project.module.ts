/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-19 22:51:36
 * @LastEditTime: 2020-11-19 23:53:44
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/project.module.ts
 * @LICENSE: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { ProjectRoutingModule } from './project-routing.module';
import { JiagouComponent } from './jiagou/jiagou.component';
import { ShuangxiangbangdingComponent } from './shuangxiangbangding/shuangxiangbangding.component';
import { ZhilingComponent } from './zhiling/zhiling.component';
import { GuandaoComponent } from './guandao/guandao.component';
import { FuzitongxinComponent } from './fuzitongxin/fuzitongxin.component';
import { CommandComponent } from './command/command.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    IndexComponent,
    JiagouComponent,
    ShuangxiangbangdingComponent,
    ZhilingComponent,
    GuandaoComponent,
    FuzitongxinComponent,
    CommandComponent
  ],
  imports: [
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ProjectRoutingModule,
  ],
  exports: [
    IndexComponent,
    JiagouComponent,
    ShuangxiangbangdingComponent,
    ZhilingComponent,
    GuandaoComponent,
    FuzitongxinComponent,
    CommandComponent
  ],
})
export class ProjectModule { }
