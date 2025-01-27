import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Aviso } from '../modelo/modelo-aviso';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioBdService {

  private sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteDBConnection;
  plataforma:string = ""

  DB_NAME: string         = "bd_lista_avisos";
  DB_ENCRIPTADA: boolean  = false;
  DB_MODE: string         = "no-encryption";
  DB_VERSION: number      = 1;
  DB_READ_ONLY: boolean   = false;

  DB_TABLE_NAME:string    = "tabla_lista_avisos"
  DB_COL_ID               = "id"
  DB_COL_TITULO           = "titulo"
  DB_COL_DESCRIPCION      = "descripcion"
  DB_COL_FECHA            = "fecha"
  DB_COL_IMAGEN           = "imagen"


  DB_SQL_TABLAS: string   = `
    CREATE TABLE IF NOT EXISTS ${this.DB_TABLE_NAME} (
      ${this.DB_COL_ID}           INTEGER PRIMARY KEY AUTOINCREMENT,
      ${this.DB_COL_TITULO}       TEXT NOT NULL,
      ${this.DB_COL_DESCRIPCION}  TEXT NOT NULL,
      ${this.DB_COL_FECHA}        TEXT NOT NULL,
      ${this.DB_COL_IMAGEN}       TEXT
    );
  `

  constructor() { }

  private async _iniciarPluginWeb(): Promise<void> {    
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if( jeepSqliteEl != null ) {      
      await this.sqlite.initWebStore()            
    }
  }

  async iniciarPlugin() {
    this.plataforma = Capacitor.getPlatform()
    if ( this.plataforma == "web") {
      await this._iniciarPluginWeb()
    }
    await this.abrirConexion()
    await this.db.execute(this.DB_SQL_TABLAS)

    console.log("sqlite::createConnection()")
    this.db = await this.sqlite.createConnection(
      this.DB_NAME,
      this.DB_ENCRIPTADA,
      this.DB_MODE,
      this.DB_VERSION,
      this.DB_READ_ONLY
    )
    console.dir(this.db)  
    
    console.log("db.execute(SQL_TABLES)")
    console.log(this.DB_SQL_TABLAS)
    await this.db.execute(this.DB_SQL_TABLAS)
  }

  async abrirConexion() {                    
    const ret = await this.sqlite.checkConnectionsConsistency() 
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
    if(ret.result && isConn) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)      
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }
    await this.db.open()
  }

  async cerrarConexion() {
    await this.db.close() 
  }

  async insertarAviso(aviso:Aviso) {
    const sql = `INSERT INTO
    ${this.DB_TABLE_NAME}(${this.DB_COL_TITULO},
                          ${this.DB_COL_DESCRIPCION},
                          ${this.DB_COL_FECHA},
                          ${this.DB_COL_IMAGEN}) VALUES (?, ?, ?, ?)`
    await this.db.run(sql, [aviso.id, aviso.titulo, aviso.descripcion, aviso.fecha.toISOString(), aviso.imagen || null])
  }

  async obtenerTodos():Promise<Aviso[]> {
    const sql = `SELECT * FROM ${this.DB_TABLE_NAME}`
    const resultado = (await this.db.query(sql)).values       
    return resultado ?? []
  }

  async eliminar(id:number) {
    const sql = `DELETE FROM ${this.DB_TABLE_NAME} WHERE ${this.DB_COL_ID} = ?`
    await this.db.run(sql, [id])
  }

}
