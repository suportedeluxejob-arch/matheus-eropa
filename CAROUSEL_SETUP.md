# Setup do Carrossel de Imagens

## 📸 Imagens Necessárias

O carrossel do site está pronto e funcionando! Agora você precisa adicionar as 4 imagens promocionais que você enviou.

### Localização das Imagens
Coloque as imagens na pasta: **`/public/carousel/`**

### Nomes dos Arquivos Esperados

1. **patch-eafc25.jpg** - PATCH TIMES BRASILEIROS EA FC 25
2. **patch-eafc26.jpg** - PATCH TIMES BRASILEIROS EA FC 26
3. **patch-eafc24.jpg** - PATCH TIMES BRASILEIROS EA FC 24
4. **jogo-eafc26.jpg** - JOGO EAFC 26 + PATCH TIMES BRASILEIROS

## 🎬 Características do Carrossel

✅ **Auto-play**: Muda de imagem a cada 5 segundos  
✅ **Navegação Manual**: Setas para navegar ou clique nos pontos indicadores  
✅ **Responsivo**: Se adapta a todos os tamanhos de tela  
✅ **Pausa Automática**: Pausas quando você interage (mouse, toque)  
✅ **Contador**: Mostra "X de Y" no canto superior direito  

## 📱 Responsividade

- **Mobile**: Altura de 256px (h-64)
- **Tablet**: Altura de 384px (h-96)
- **Desktop Médio**: Altura de 500px
- **Desktop Grande**: Altura de 600px

## 🔧 Como Adicionar as Imagens

### Opção 1: Via Explorador de Arquivos (Windows)
1. Abra `C:\Users\store\Desktop\wgpatchofc-site\public\carousel\`
2. Copie/arraste as 4 imagens para essa pasta
3. Renomeie se necessário para os nomes esperados acima

### Opção 2: Via Terminal (PowerShell)
```powershell
# Copie as imagens para a pasta carousel
Copy-Item "C:\caminho\para\patch-eafc25.jpg" "C:\Users\store\Desktop\wgpatchofc-site\public\carousel\"
Copy-Item "C:\caminho\para\patch-eafc26.jpg" "C:\Users\store\Desktop\wgpatchofc-site\public\carousel\"
Copy-Item "C:\caminho\para\patch-eafc24.jpg" "C:\Users\store\Desktop\wgpatchofc-site\public\carousel\"
Copy-Item "C:\caminho\para\jogo-eafc26.jpg" "C:\Users\store\Desktop\wgpatchofc-site\public\carousel\"
```

## ✨ Customizações Disponíveis

Se você quiser ajustar o carrossel, edite `components/hero-carousel.tsx`:

- **Velocidade de transição**: Mude `5000` para outro valor em ms (linha ~30)
- **Duração da fade animation**: Mude `duration-1000` para outro valor
- **Tempo antes de retomar autoplay**: Mude `10000` para outro valor em ms
- **Altura do carrossel**: Ajuste as classes `h-64 sm:h-96 md:h-[500px] lg:h-[600px]`

## 📋 Checklist de Verificação

- [ ] Imagens copiadas para `/public/carousel/`
- [ ] Nomes dos arquivos correspondem aos esperados
- [ ] Rode `npm run build` para compilar
- [ ] Rode `npm run dev` para testar localmente
- [ ] Carrossel aparece no topo da página landing
- [ ] Imagens rotacionam automaticamente a cada 5 segundos
- [ ] Setas de navegação aparecem ao passar o mouse
- [ ] Pontos indicadores funcionam ao clicar

## 🐛 Troubleshooting

**As imagens não aparecem?**
- Verifique se os nomes dos arquivos estão corretos
- Certifique-se que estão em `/public/carousel/`
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Rode `npm run build` novamente

**O carrossel não rotaciona?**
- Abra o console do navegador (F12) e procure por erros
- Verifique se JavaScript está habilitado
- Tente recarregar a página (F5)

---

**Está tudo pronto!** 🎉 Assim que adicionar as imagens, o carrossel funcionará automaticamente na landing page.
