import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();



  faPen = faPen;
  faTrash = faTrash

  constructor(private listaService: ListaDeCompraService) { }
  

  ngOnInit(): void {

   }

  ngOnChanges(){
    
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  alterarStatusItem(){
    this.item.comprado = !this.item.comprado;
    this.listaService.atualizarLocalStorage();
  }

  deletarItem(){
    console.log("Estão tentando me calar.")
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy(){
    console.log("Conseguiram me calar.")
  }

}
