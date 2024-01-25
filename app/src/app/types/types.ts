type ClientsGlobal = { image_src: string, _id: string, name: string, enterprises: number, realties: number }
type Client = {
  _id: string,
  name: string,
  image_src: string
  enterprises: Enterprise[],
}
type Enterprise = {
  _id: string,
  name: string,
  image_src: string,
  realties: string,
}
type TotalsGeneric = { clients: number, enterprise: number, realties: number }
type TotalForCompany= { enterprise: number, realties: number }