import { Component , ViewChild } from '@angular/core';



@Component({
  selector: 'knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.scss']
})
export class KnowledgesComponent {
  tabs: any[] = [
    {
      title: 'Lenguajes programación',
      content: '- C, C++, Java, PHP, Python, Javascript, OpenGL, OpenSceneGraph, Prolog,Ensamblador, Json, HTML, X3D, JSP, VoiceXML, Angular2.',
      customClass: 'customClass'
    },
    {
      title: 'BBDD',
      content: 'Dynamic content 2',
      customClass: 'customClass'
    },
    {
      title: 'IDE',
      content: 'Dynamic content 2',
      customClass: 'customClass'
    },
    {
      title: 'S.O.',
      content: 'Dynamic content 2',
      customClass: 'customClass'
    },
    {
      title: 'Control Versiones',
      content: 'Dynamic content 2',
      customClass: 'customClass'
    },
    {
      title: 'Lenguajes modelado',
      content: 'Dynamic content 2',
      customClass: 'customClass'
    }
  ];
}
