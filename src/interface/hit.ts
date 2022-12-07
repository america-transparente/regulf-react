export interface Id {
  value: string;
}

export interface TipoContrato {
  value: string;
}

export interface NombreOrganismo {
  value: string;
}

export interface CódigoOrganismo {
  value: string;
}

export interface FechaPublicación {
  value: string;
}

export interface Año {
  value: string;
}

export interface Mes {
  value: string;
}

export interface TipoEstamento {
  value: string;
}

export interface Nombre {
  value: string;
}

export interface TipoCalificaciónProfesional {
  value: string;
}

export interface TipoCargo {
  value: string;
}

export interface Región {
  value: string;
}

export interface Asignaciones {
  value: string;
}

export interface UnidadMonetaria {
  value: string;
}

export interface RemuneraciónBrutaMensual {
  value: string;
}

export interface RemuneraciónLíquidaMensual {
  value: string;
}

export interface HorasDiurnas {
  value: string;
}

export interface HorasNocturnas {
  value: string;
}

export interface HorasFestivas {
  value: string;
}

export interface FechaIngreso {
  value: string;
}

export interface FechaTérmino {
  value: string;
}

export interface Observaciones {
  value: string;
}

export interface Enlace {
  value: string;
}

export interface Viáticos {
  value: string;
}

export interface HighlightResult {
  id: Id;
  tipo_contrato: TipoContrato;
  nombre_organismo: NombreOrganismo;
  código_organismo: CódigoOrganismo;
  fecha_publicación: FechaPublicación;
  año: Año;
  mes: Mes;
  tipo_estamento: TipoEstamento;
  nombre: Nombre;
  tipo_calificación_profesional: TipoCalificaciónProfesional;
  tipo_cargo: TipoCargo;
  región: Región;
  asignaciones: Asignaciones;
  unidad_monetaria: UnidadMonetaria;
  remuneración_bruta_mensual: RemuneraciónBrutaMensual;
  remuneración_líquida_mensual: RemuneraciónLíquidaMensual;
  horas_diurnas: HorasDiurnas;
  horas_nocturnas: HorasNocturnas;
  horas_festivas: HorasFestivas;
  fecha_ingreso: FechaIngreso;
  fecha_término: FechaTérmino;
  observaciones: Observaciones;
  enlace: Enlace;
  viáticos: Viáticos;
}

export interface Id2 {
  value: string;
}

export interface TipoContrato2 {
  value: string;
}

export interface NombreOrganismo2 {
  value: string;
}

export interface CódigoOrganismo2 {
  value: string;
}

export interface FechaPublicación2 {
  value: string;
}

export interface Año2 {
  value: string;
}

export interface Mes2 {
  value: string;
}

export interface TipoEstamento2 {
  value: string;
}

export interface Nombre2 {
  value: string;
}

export interface TipoCalificaciónProfesional2 {
  value: string;
}

export interface TipoCargo2 {
  value: string;
}

export interface Región2 {
  value: string;
}

export interface Asignaciones2 {
  value: string;
}

export interface UnidadMonetaria2 {
  value: string;
}

export interface RemuneraciónBrutaMensual2 {
  value: string;
}

export interface RemuneraciónLíquidaMensual2 {
  value: string;
}

export interface HorasDiurnas2 {
  value: string;
}

export interface HorasNocturnas2 {
  value: string;
}

export interface HorasFestivas2 {
  value: string;
}

export interface FechaIngreso2 {
  value: string;
}

export interface FechaTérmino2 {
  value: string;
}

export interface Observaciones2 {
  value: string;
}

export interface Enlace2 {
  value: string;
}

export interface Viáticos2 {
  value: string;
}

export interface SnippetResult {
  id: Id2;
  tipo_contrato: TipoContrato2;
  nombre_organismo: NombreOrganismo2;
  código_organismo: CódigoOrganismo2;
  fecha_publicación: FechaPublicación2;
  año: Año2;
  mes: Mes2;
  tipo_estamento: TipoEstamento2;
  nombre: Nombre2;
  tipo_calificación_profesional: TipoCalificaciónProfesional2;
  tipo_cargo: TipoCargo2;
  región: Región2;
  asignaciones: Asignaciones2;
  unidad_monetaria: UnidadMonetaria2;
  remuneración_bruta_mensual: RemuneraciónBrutaMensual2;
  remuneración_líquida_mensual: RemuneraciónLíquidaMensual2;
  horas_diurnas: HorasDiurnas2;
  horas_nocturnas: HorasNocturnas2;
  horas_festivas: HorasFestivas2;
  fecha_ingreso: FechaIngreso2;
  fecha_término: FechaTérmino2;
  observaciones: Observaciones2;
  enlace: Enlace2;
  viáticos: Viáticos2;
}

export default interface Hit {
  id: string;
  tipo_contrato: string;
  nombre_organismo: string;
  código_organismo: string;
  fecha_publicación: string;
  año: string;
  mes: string;
  tipo_estamento: string;
  nombre: string;
  tipo_calificación_profesional: string;
  tipo_cargo: string;
  región: string;
  asignaciones: string;
  unidad_monetaria: string;
  remuneración_bruta_mensual: string;
  remuneración_líquida_mensual: string;
  horas_diurnas: string;
  horas_nocturnas: string;
  horas_festivas: string;
  fecha_ingreso: string;
  fecha_término: string;
  observaciones: string;
  enlace: string;
  viáticos?: any;
  _highlightResult: HighlightResult;
  _snippetResult: SnippetResult;
  __position: number;
  fecha_egreso: string;
  position: number;
}
