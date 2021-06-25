import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuardService]},
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule',canActivate: [AuthGuardService] },
  { path: 'bases-para-ser-lider', loadChildren: './pages/bases-para-ser-lider/bases-para-ser-lider.module#BasesParaSerLiderPageModule', canActivate: [AuthGuardService] },
  { path: 'camera-qr', loadChildren: './pages/camera-qr/camera-qr.module#CameraQRPageModule', canActivate: [AuthGuardService] },
  { path: 'caracteristicas-lider', loadChildren: './pages/caracteristicas-lider/caracteristicas-lider.module#CaracteristicasLiderPageModule', canActivate: [AuthGuardService] },
  { path: 'causa-problemas-humanos', loadChildren: './pages/causa-problemas-humanos/causa-problemas-humanos.module#CausaProblemasHumanosPageModule', canActivate: [AuthGuardService] },
  { path: 'clasificacion-relaciones-humanas', loadChildren: './pages/clasificacion-relaciones-humanas/clasificacion-relaciones-humanas.module#ClasificacionRelacionesHumanasPageModule', canActivate: [AuthGuardService] },
  { path: 'consiste-labor-lider', loadChildren: './pages/consiste-labor-lider/consiste-labor-lider.module#ConsisteLaborLiderPageModule', canActivate: [AuthGuardService] },
  { path: 'cortesia-buenos-modales', loadChildren: './pages/cortesia-buenos-modales/cortesia-buenos-modales.module#CortesiaBuenosModalesPageModule', canActivate: [AuthGuardService] },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule', canActivate: [AuthGuardService] },
  { path: 'diez-dilemas-eticos', loadChildren: './pages/diez-dilemas-eticos/diez-dilemas-eticos.module#DiezDilemasEticosPageModule', canActivate: [AuthGuardService] },
  { path: 'dilemas-aproximaciones', loadChildren: './pages/dilemas-aproximaciones/dilemas-aproximaciones.module#DilemasAproximacionesPageModule', canActivate: [AuthGuardService] },
  { path: 'hombre-ser-libre', loadChildren: './pages/hombre-ser-libre/hombre-ser-libre.module#HombreSerLibrePageModule', canActivate: [AuthGuardService] },
  { path: 'busca-fuente-bien-mal', loadChildren: './pages/busca-fuente-bien-mal/busca-fuente-bien-mal.module#BuscaFuenteBienMalPageModule', canActivate: [AuthGuardService] },
  { path: 'estado-animo', loadChildren: './pages/estado-animo/estado-animo.module#EstadoAnimoPageModule', canActivate: [AuthGuardService] },
  { path: 'estado-animo-relaciones-humanas', loadChildren: './pages/estado-animo-relaciones-humanas/estado-animo-relaciones-humanas.module#EstadoAnimoRelacionesHumanasPageModule', canActivate: [AuthGuardService] },
  { path: 'etica-ciudadania', loadChildren: './pages/etica-ciudadania/etica-ciudadania.module#EticaCiudadaniaPageModule', canActivate: [AuthGuardService] },
  { path: 'etica-moral', loadChildren: './pages/etica-moral/etica-moral.module#EticaMoralPageModule', canActivate: [AuthGuardService] },
  { path: 'filosofia-liderazgo', loadChildren: './pages/filosofia-liderazgo/filosofia-liderazgo.module#FilosofiaLiderazgoPageModule', canActivate: [AuthGuardService] },
  { path: 'home1', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuardService] },
  { path: 'impratancia-relaciones-humanas', loadChildren: './pages/impratancia-relaciones-humanas/impratancia-relaciones-humanas.module#ImpratanciaRelacionesHumanasPageModule', canActivate: [AuthGuardService] },
  { path: 'info-institucional', loadChildren: './pages/info-institucional/info-institucional.module#InfoInstitucionalPageModule', canActivate: [AuthGuardService] },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule', canActivate: [AuthGuardService] },
  { path: 'conciencia-moral', loadChildren: './pages/conciencia-moral/conciencia-moral.module#ConcienciaMoralPageModule', canActivate: [AuthGuardService] },
  { path: 'letra-himno', loadChildren: './pages/letra-himno/letra-himno.module#LetraHimnoPageModule', canActivate: [AuthGuardService] },
  { path: 'liderazgo', loadChildren: './pages/liderazgo/liderazgo.module#LiderazgoPageModule', canActivate: [AuthGuardService] },
  { path: 'lider-carismatico', loadChildren: './pages/lider-carismatico/lider-carismatico.module#LiderCarismaticoPageModule', canActivate: [AuthGuardService] },
  { path: 'lider-nace-sehace', loadChildren: './pages/lider-nace-sehace/lider-nace-sehace.module#LiderNaceSehacePageModule', canActivate: [AuthGuardService] },
  { path: 'mas-info', loadChildren: './pages/mas-info/mas-info.module#MasInfoPageModule', canActivate: [AuthGuardService] },
  { path: 'motivos-asociacion-humana', loadChildren: './pages/motivos-asociacion-humana/motivos-asociacion-humana.module#MotivosAsociacionHumanaPageModule', canActivate: [AuthGuardService] },
  { path: 'orden-jerarquico-necesidades', loadChildren: './pages/orden-jerarquico-necesidades/orden-jerarquico-necesidades.module#OrdenJerarquicoNecesidadesPageModule', canActivate: [AuthGuardService] },
  { path: 'pag-principal', loadChildren: './pages/pag-principal/pag-principal.module#PagPrincipalPageModule', canActivate: [AuthGuardService] },
  { path: 'poniendo-practica-liderazgo', loadChildren: './pages/poniendo-practica-liderazgo/poniendo-practica-liderazgo.module#PoniendoPracticaLiderazgoPageModule', canActivate: [AuthGuardService] },
  { path: 'que-es-liderazgo', loadChildren: './pages/que-es-liderazgo/que-es-liderazgo.module#QueEsLiderazgoPageModule', canActivate: [AuthGuardService] },
  { path: 'reglamento-estudiantil', loadChildren: './pages/reglamento-estudiantil/reglamento-estudiantil.module#ReglamentoEstudiantilPageModule', canActivate: [AuthGuardService] },
  { path: 'relaciones-humanas', loadChildren: './pages/relaciones-humanas/relaciones-humanas.module#RelacionesHumanasPageModule', canActivate: [AuthGuardService] },
  { path: 'rel-humanas-rel-publicas', loadChildren: './pages/rel-humanas-rel-publicas/rel-humanas-rel-publicas.module#RelHumanasRelPublicasPageModule', canActivate: [AuthGuardService] },
  { path: 'responsabilidad', loadChildren: './pages/responsabilidad/responsabilidad.module#ResponsabilidadPageModule', canActivate: [AuthGuardService] },
  { path: 'riesgos-caer', loadChildren: './pages/riesgos-caer/riesgos-caer.module#RiesgosCaerPageModule', canActivate: [AuthGuardService] },
  { path: 'test-liderazgo', loadChildren: './pages/test-liderazgo/test-liderazgo.module#TestLiderazgoPageModule', canActivate: [AuthGuardService] },
  { path: 'tipo-liderazgo', loadChildren: './pages/tipo-liderazgo/tipo-liderazgo.module#TipoLiderazgoPageModule', canActivate: [AuthGuardService] },
  { path: 'valores-institucionales', loadChildren: './pages/valores-institucionales/valores-institucionales.module#ValoresInstitucionalesPageModule', canActivate: [AuthGuardService] },
  { path: 'ser-humano-como-ente-social', loadChildren: './pages/ser-humano-como-ente-social/ser-humano-como-ente-social.module#SerHumanoComoEnteSocialPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
