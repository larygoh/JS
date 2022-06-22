var _texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

var corte = _texto.split('<b>');
console.log(corte);

var corte               =_texto.split("<b>");

var saoPaulo            = corte[1];
var saoPauloCorte       = saoPaulo.split("#");
var saoPauloTitulo      = saoPauloCorte[0].split("</b><br>")[0];
var saoPauloDescricao   = saoPauloCorte[0].split("</b><br>")[1].split("<br>")[0];
var sapPauloExplicativo = saoPauloCorte[0].split("</b><br>")[1].split("<br>")[1];
var saoPauloRoteiroA    = saoPauloCorte[1];
var saoPauloRoteiroB    = saoPauloCorte[2];
var saoPauloRoteiroC    = saoPauloCorte[3];
console.log(saoPauloCorte);

var lasVegas            = corte[2];
var lasVegasCorte       = lasVegas.split("#");
var lasVegasTitulo      = lasVegasCorte[0].split("</b><br>")[0];
var lasVegasDescricao   = lasVegasCorte[0].split("</b><br>")[1].split("<br>")[0];
var lasVegasExplicativo = lasVegasCorte[0].split("</b><br>")[1].split("<br>")[1];
var lasVegasRoteiroA    = lasVegasCorte[1];
var lasVegasRoteiroB    = lasVegasCorte[2];
var lasVegasRoteiroC    = lasVegasCorte[3];
console.log(lasVegasCorte);

var moscou            = corte[3];
var moscouCorte       = moscou.split("#");
var moscouTitulo      = moscouCorte[0].split("</b><br>")[0];
var moscouDescricao   = moscouCorte[0].split("</b><br>")[1].split("<br>")[0];
var moscouExplicativo = moscouCorte[0].split("</b><br>")[1].split("<br>")[1];
var moscouRoteiroA    = moscouCorte[1];
var moscouRoteiroB    = moscouCorte[2];
var moscouRoteiroC    = moscouCorte[3];
console.log(moscouCorte);