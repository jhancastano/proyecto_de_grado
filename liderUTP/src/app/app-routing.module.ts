import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule',canActivate: [AuthGuardService] },
  { path: 'bases-para-ser-lider', loadChildren: './pages/bases-para-ser-lider/bases-para-ser-lider.module#BasesParaSerLiderPageModule' },
  { path: 'camera-qr', loadChildren: './pages/camera-qr/camera-qr.module#CameraQRPageModule' },
  { path: 'caracteristicas-lider', loadChildren: './pages/caracteristicas-lider/caracteristicas-lider.module#CaracteristicasLiderPageModule' },
  { path: 'causa-problemas-humanos', loadChildren: './pages/causa-problemas-humanos/causa-problemas-humanos.module#CausaProblemasHumanosPageModule' },
  { path: 'clasificacion-relaciones-humanas', loadChildren: './pages/clasificacion-relaciones-humanas/clasificacion-relaciones-humanas.module#ClasificacionRelacionesHumanasPageModule' },
  { path: 'consiste-labor-lider', loadChildren: './pages/consiste-labor-lider/consiste-labor-lider.module#ConsisteLaborLiderPageModule' },
  { path: 'cortesia-buenos-modales', loadChildren: './pages/cortesia-buenos-modales/cortesia-buenos-modales.module#CortesiaBuenosModalesPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'diez-dilemas-eticos', loadChildren: './pages/diez-dilemas-eticos/diez-dilemas-eticos.module#DiezDilemasEticosPageModule' },
  { path: 'dilemas-aproximaciones', loadChildren: './pages/dilemas-aproximaciones/dilemas-aproximaciones.module#DilemasAproximacionesPageModule' },
  { path: 'hombre-ser-libre', loadChildren: './pages/hombre-ser-libre/hombre-ser-libre.module#HombreSerLibrePageModule' },
  { path: 'busca-fuente-bien-mal', loadChildren: './pages/busca-fuente-bien-mal/busca-fuente-bien-mal.module#BuscaFuenteBienMalPageModule' },
  { path: 'estado-animo', loadChildren: './pages/estado-animo/estado-animo.module#EstadoAnimoPageModule' },
  { path: 'estado-animo-relaciones-humanas', loadChildren: './pages/estado-animo-relaciones-humanas/estado-animo-relaciones-humanas.module#EstadoAnimoRelacionesHumanasPageModule' },
  { path: 'etica-ciudadania', loadChildren: './pages/etica-ciudadania/etica-ciudadania.module#EticaCiudadaniaPageModule' },
  { path: 'etica-moral', loadChildren: './pages/etica-moral/etica-moral.module#EticaMoralPageModule' },
  { path: 'filosofia-liderazgo', loadChildren: './pages/filosofia-liderazgo/filosofia-liderazgo.module#FilosofiaLiderazgoPageModule' },
  { path: 'home1', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'impratancia-relaciones-humanas', loadChildren: './pages/impratancia-relaciones-humanas/impratancia-relaciones-humanas.module#ImpratanciaRelacionesHumanasPageModule' },
  { path: 'info-institucional', loadChildren: './pages/info-institucional/info-institucional.module#InfoInstitucionalPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'conciencia-moral', loadChildren: './pages/conciencia-moral/conciencia-moral.module#ConcienciaMoralPageModule' },
  { path: 'letra-himno', loadChildren: './pages/letra-himno/letra-himno.module#LetraHimnoPageModule' },
  { path: 'liderazgo', loadChildren: './pages/liderazgo/liderazgo.module#LiderazgoPageModule' },
  { path: 'lider-carismatico', loadChildren: './pages/lider-carismatico/lider-carismatico.module#LiderCarismaticoPageModule' },
  { path: 'lider-nace-sehace', loadChildren: './pages/lider-nace-sehace/lider-nace-sehace.module#LiderNaceSehacePageModule' },
  { path: 'mas-info', loadChildren: './pages/mas-info/mas-info.module#MasInfoPageModule' },
  { path: 'motivos-asociacion-humana', loadChildren: './pages/motivos-asociacion-humana/motivos-asociacion-humana.module#MotivosAsociacionHumanaPageModule' },
  { path: 'orden-jerarquico-necesidades', loadChildren: './pages/orden-jerarquico-necesidades/orden-jerarquico-necesidades.module#OrdenJerarquicoNecesidadesPageModule' },
  { path: 'pag-principal', loadChildren: './pages/pag-principal/pag-principal.module#PagPrincipalPageModule' },
  { path: 'poniendo-practica-liderazgo', loadChildren: './pages/poniendo-practica-liderazgo/poniendo-practica-liderazgo.module#PoniendoPracticaLiderazgoPageModule' },
  { path: 'que-es-liderazgo', loadChildren: './pages/que-es-liderazgo/que-es-liderazgo.module#QueEsLiderazgoPageModule' },
  { path: 'reglamento-estudiantil', loadChildren: './pages/reglamento-estudiantil/reglamento-estudiantil.module#ReglamentoEstudiantilPageModule' },
  { path: 'relaciones-humanas', loadChildren: './pages/relaciones-humanas/relaciones-humanas.module#RelacionesHumanasPageModule' },
  { path: 'rel-humanas-rel-publicas', loadChildren: './pages/rel-humanas-rel-publicas/rel-humanas-rel-publicas.module#RelHumanasRelPublicasPageModule' },
  { path: 'responsabilidad', loadChildren: './pages/responsabilidad/responsabilidad.module#ResponsabilidadPageModule' },
  { path: 'riesgos-caer', loadChildren: './pages/riesgos-caer/riesgos-caer.module#RiesgosCaerPageModule' },
  { path: 'test-liderazgo', loadChildren: './pages/test-liderazgo/test-liderazgo.module#TestLiderazgoPageModule' },
  { path: 'tipo-liderazgo', loadChildren: './pages/tipo-liderazgo/tipo-liderazgo.module#TipoLiderazgoPageModule' },
  { path: 'valores-institucionales', loadChildren: './pages/valores-institucionales/valores-institucionales.module#ValoresInstitucionalesPageModule' },
  { path: 'ser-humano-como-ente-social', loadChildren: './pages/ser-humano-como-ente-social/ser-humano-como-ente-social.module#SerHumanoComoEnteSocialPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
