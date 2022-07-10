import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  list: {
    titulo: string;
    descricao: string;
    icone: string;
  }[] | any;

  constructor() { }

  ngOnInit(): void {

    let descricao = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."

    this.list = [
      { "titulo": "Planejamento financeiro", "descricao": descricao, "icone": `<i class="fa fa-hand-holding-usd"></i>` },
      { "titulo": "Investimentos", "descricao": descricao, "icone": `<i class="fa-solid fa-circle-dollar-to-slot"></i>` },
      { "titulo": "Seguros", "descricao": descricao, "icone": `<i class="fa-solid fa-shield"></i>` },
      { "titulo": "Cursos", "descricao": descricao, "icone": `<i class="fa-solid fa-person-chalkboard"></i>` },
      { "titulo": "Viagens", "descricao": descricao, "icone": `<i class="fa-solid fa-plane"></i>` },
      { "titulo": "Milhas", "descricao": descricao, "icone": `<i class="fa-solid fa-suitcase-rolling"></i>` },
      { "titulo": "Veículos", "descricao": descricao, "icone": `<i class="fa-solid fa-car"></i>` },
      { "titulo": "Imóveis", "descricao": descricao, "icone": `<i class="fa-solid fa-house"></i>` },
      { "titulo": "Imposto", "descricao": descricao, "icone": `<i class="fa-solid fa-filter-circle-dollar"></i>` },
      { "titulo": "Aposentadoria", "descricao": descricao, "icone": `<i class="fa-solid fa-sack-dollar"></i>` },
      { "titulo": "Tributário", "descricao": descricao, "icone": `<i class="fa-solid fa-file-invoice-dollar"></i>` },
      { "titulo": "Patrímonio", "descricao": descricao, "icone": `<i class="fa-solid fa-house-circle-check"></i>` },
      { "titulo": "Seja um parceiro", "descricao": descricao, "icone": `<i class="fa-solid fa-handshake-angle"></i>` },
      { "titulo": "Por um mundo melhor", "descricao": descricao, "icone": `<i class="fa-solid fa-earth-americas"></i>` },
    ];

  }

}
