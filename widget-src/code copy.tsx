// const { widget } = figma;
// const {
//   useEffect,
//   Text,
//   AutoLayout,
//   usePropertyMenu,
//   useSyncedState,
//   Frame,
//   Input,
//   Rectangle,
//   SVG
// } = widget;

// const buttonSrc = `
// <svg width='16' height='18' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
// <g clip-path='url(#clip0_14_167)'>
// <path d='M16.0002 15.4958C16.0018 15.8078 15.9371 16.1165 15.8103 16.4016C15.6836 16.6867 15.4977 16.9415 15.265 17.1493C15.0323 17.3571 14.7581 17.5131 14.4606 17.6069C14.163 17.7007 13.849 17.7301 13.5392 17.6934C12.4114 17.5265 11.585 16.5452 11.6125 15.4055V2.30281C11.5853 1.16193 12.4137 0.180056 13.5429 0.0149935C13.8524 -0.0212412 14.1661 0.00864971 14.4632 0.102689C14.7603 0.196729 15.034 0.352773 15.2663 0.560502C15.4986 0.768231 15.6841 1.02291 15.8106 1.30769C15.9371 1.59248 16.0017 1.90088 16.0002 2.21249V15.4958Z' fill='#F9AB00'/>
// <path d='M2.19381 13.3246C3.40544 13.3246 4.38763 14.3068 4.38763 15.5184C4.38763 16.73 3.40544 17.7122 2.19381 17.7122C0.982188 17.7122 0 16.73 0 15.5184C0 14.3068 0.982188 13.3246 2.19381 13.3246ZM7.96619 6.67537C6.74888 6.74212 5.80431 7.76324 5.83262 8.98212V14.8749C5.83262 16.4742 6.53631 17.4451 7.56731 17.652C7.88695 17.7168 8.21701 17.7096 8.53354 17.631C8.85006 17.5524 9.14513 17.4043 9.39732 17.1975C9.64951 16.9907 9.85252 16.7304 9.9916 16.4354C10.1307 16.1404 10.2024 15.8181 10.2014 15.492V8.88056C10.202 8.58828 10.1443 8.29882 10.0318 8.02907C9.91926 7.75932 9.75415 7.51468 9.54608 7.30941C9.33801 7.10415 9.09115 6.94237 8.81989 6.83353C8.54864 6.72468 8.25843 6.67087 7.96619 6.67537Z' fill='#E37400'/>
// </g>
// <defs>
// <clipPath id='clip0_14_167'>
// <rect width='16' height='17.75' fill='white'/>
// </clipPath>
// </defs>
// </svg>
// `;
// const buttonPlusSrc = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
// <g clip-path="url(#clip0_14_185)">
// <path d="M8 0C3.58175 0 0 3.58175 0 8C0 12.4185 3.58175 16 8 16C12.4185 16 16 12.4185 16 8C16 3.58175 12.4185 0 8 0ZM8 15.0157C4.14025 15.0157 1 11.8597 1 7.99997C1 4.14022 4.14025 0.999969 8 0.999969C11.8597 0.999969 15 4.14023 15 7.99997C15 11.8597 11.8597 15.0157 8 15.0157ZM11.5 7.5H8.5V4.5C8.5 4.224 8.276 4 8 4C7.724 4 7.5 4.224 7.5 4.5V7.5H4.5C4.224 7.5 4 7.724 4 8C4 8.276 4.224 8.5 4.5 8.5H7.5V11.5C7.5 11.776 7.724 12 8 12C8.276 12 8.5 11.776 8.5 11.5V8.5H11.5C11.776 8.5 12 8.276 12 8C12 7.724 11.776 7.5 11.5 7.5Z" fill="black"/>
// </g>
// <defs>
// <clipPath id="clip0_14_185">
// <rect width="16" height="16" fill="white"/>
// </clipPath>
// </defs>
// </svg>
// `;
// const buttonSubstracSrc = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
// <g clip-path="url(#clip0_56_1992)">
// <path d="M4.57144 8.00001H11.4286M8.00001 15.4286C9.97019 15.4286 11.8597 14.6459 13.2528 13.2528C14.6459 11.8597 15.4286 9.97019 15.4286 8.00001C15.4286 6.02983 14.6459 4.14035 13.2528 2.74722C11.8597 1.35409 9.97019 0.571442 8.00001 0.571442C6.02983 0.571442 4.14035 1.35409 2.74722 2.74722C1.35409 4.14035 0.571442 6.02983 0.571442 8.00001C0.571442 9.97019 1.35409 11.8597 2.74722 13.2528C4.14035 14.6459 6.02983 15.4286 8.00001 15.4286Z" stroke="#BF3C3C" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <defs>
// <clipPath id="clip0_56_1992">
// <rect width="16" height="16" fill="white"/>
// </clipPath>
// </defs>
// </svg>
// `;
// const fills = [
//   '#3366ff',
//   '#9933ff',
//   '#ff33cc',
//   '#ff3333',
//   '#ffcc33',
//   '#99ff33',
//   '#33ff66',
//   '#33ffff'
// ];
// function Widget() {
//   useEffect(() => {
//     figma.ui.onmessage = (msg) => {
//       if (msg.type === 'showToast') {
//         figma.notify('Hello widget');
//       }
//       if (msg.type === 'close') {
//         figma.closePlugin();
//       }
//     };
//   });

//   const [text, setText] = useSyncedState('text', '');
//   const [open, setOpen] = useSyncedState('open', true);
//   const [color, setColor] = useSyncedState('color', fills[0]);
//   const [size, setSize] = useSyncedState('size', 50);
//   const [inputs, setInputs] = useSyncedState('inputs', [
//     { property: '', value: '' }
//   ]);
//   const [additionalElements, setAdditionalElements] = useSyncedState(
//     'additionalElements',
//     0
//   );

//   usePropertyMenu(
//     open
//       ? [
//           {
//             itemType: 'color-selector',
//             options: fills.map((a) => ({ tooltip: a, option: a })),
//             selectedOption: color,
//             tooltip: 'Color',
//             propertyName: 'color'
//           },
//           {
//             itemType: 'action',
//             tooltip: 'Duplicate Widget',
//             propertyName: 'duplicateWidget',
//             icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//         <path d="M18 10H14V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6L10.071 10H6C5.46957 10 4.96086 10.2107 4.58579 10.5858C4.21071 10.9609 4 11.4696 4 12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7893 5.46957 14 6 14L10.071 13.929L10 18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V13.929L18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10Z" fill="white"/>
//       </svg>`
//           }
//         ]
//       : [],
//     ({ propertyName, propertyValue }) => {
//       if (propertyName === 'color' && propertyValue) {
//         setColor(propertyValue);
//       }
//       if (propertyName === 'duplicateWidget') {
//         handleDuplicateWidget();
//       }
//     }
//   );

//   const handleDuplicateWidget = () => {
//     const selection = figma.currentPage.selection;

//     if (selection.length === 1 && selection[0]) {
//       const widgetNode = selection[0] as FrameNode;
//       const newWidgetNode = widgetNode.clone();
//       newWidgetNode.name = `${widgetNode.name}`;
//       newWidgetNode.x += 450;
//       newWidgetNode.y += 0;

//       // Puedes ajustar otras propiedades del nuevo widget aquí si es necesario

//       figma.currentPage.appendChild(newWidgetNode);
//       figma.notify('Nuevo widget creado exitosamente.');
//     } else {
//       figma.notify('Selecciona un widget para duplicarlo.');
//     }
//   };

//   const handleNewWidget = () => {
//     const selection = figma.currentPage.selection;

//     if (selection.length === 1 && selection[0]) {
//       const widgetNode = selection[0] as FrameNode;
//       const newWidgetNode = widgetNode.clone();
//       newWidgetNode.name = `${widgetNode.name}`;

//       // Puedes ajustar otras propiedades del nuevo widget aquí si es necesario

//       figma.currentPage.appendChild(newWidgetNode);
//       figma.notify('Nuevo widget creado exitosamente.');

//       if (widgetNode.parent) {
//         // Insertar el nuevo widget al principio de la lista de hijos del contenedor
//         widgetNode.parent.insertChild(0, newWidgetNode);
//         widgetNode.x += 450;
//         widgetNode.y += 0;
//       } else {
//         figma.currentPage.appendChild(newWidgetNode);
//       }

//       setText('');
//       setInputs([{ property: '', value: '' }]);
//     } else {
//       figma.notify('Selecciona un widget para duplicarlo.');
//     }
//   };

//   const fontSize = 10;
//   const padding = size * 0.2;
//   const strokeWidth = 1;

//   const cornerRadius: WidgetJSX.CornerRadius = {
//     topLeft: size,
//     topRight: size,
//     bottomLeft: strokeWidth,
//     bottomRight: size
//   };

//   const shadow: WidgetJSX.Effect = {
//     type: 'drop-shadow',
//     color: '#00000040',
//     offset: { x: 0, y: 5 },
//     blur: 15,
//     showShadowBehindNode: false
//   };

//   const handleRemoveElements = (indexToRemove: number) => {
//     setInputs((prevInputs) => {
//       // Filtrar los inputs que no corresponden a la fila que se está eliminando
//       const filteredInputs = prevInputs.filter(
//         (_, index) => index !== indexToRemove && index !== indexToRemove + 1
//       );
//       return filteredInputs;
//     });

//     setAdditionalElements((prev) => prev - 2);
//   };

//   // const handlePropertyChange = (index: number, newValue: string) => {
//   //   const newInputs = [...inputs];
//   //   newInputs[index].property = newValue;
//   //   setInputs(newInputs);
//   // };

//   // const handleSave = () => {
//   //   console.log('Guardado');
//   // };

//   const handleAddElements = () => {
//     setAdditionalElements((prev) => prev + 2);
//   };

//   const handleValueChange = (index: number, newValue: string) => {
//     setInputs((prevInputs) => {
//       const newInputs = [...prevInputs];
//       if (index < newInputs.length) {
//         newInputs[index].value = newValue;
//       } else {
//         for (let i = newInputs.length; i <= index; i++) {
//           newInputs.push({ property: '', value: '' });
//         }
//         newInputs[index].value = newValue;
//       }
//       return newInputs;
//     });
//   };

//   const additionalInputs = [];
//   for (let i = 0; i < additionalElements; i += 2) {
//     const propertyIndex = i;
//     const valueIndex = i + 1;

//     additionalInputs.push(
//       <AutoLayout
//         key={i}
//         direction='horizontal'
//         width={'fill-parent'}
//         spacing={8}
//         verticalAlignItems='center'
//       >
//         <Input
//           fontSize={fontSize}
//           fontWeight='normal'
//           inputFrameProps={{
//             cornerRadius: 4,
//             effect: shadow,
//             hidden: !open,
//             horizontalAlignItems: 'center',
//             overflow: 'visible',
//             padding,
//             stroke: color,
//             strokeWidth,
//             verticalAlignItems: 'center'
//           }}
//           // onTextEditEnd={(e) => setText(e.characters.trim())}
//           onTextEditEnd={(event) =>
//             handleValueChange(propertyIndex, event.characters.trim())
//           }
//           placeholder='Property...'
//           value={inputs[propertyIndex]?.value || ''}
//           width={'fill-parent'}
//         />
//         <Input
//           fontSize={fontSize}
//           fontWeight='normal'
//           inputFrameProps={{
//             cornerRadius: 4,
//             effect: shadow,
//             hidden: !open,
//             horizontalAlignItems: 'center',
//             overflow: 'visible',
//             padding,
//             stroke: color,
//             strokeWidth,
//             verticalAlignItems: 'center'
//           }}
//           // onTextEditEnd={(e) => setText(e.characters.trim())}
//           onTextEditEnd={(event) =>
//             handleValueChange(valueIndex, event.characters.trim())
//           }
//           placeholder='Note...'
//           // value={text}
//           value={inputs[valueIndex]?.value || ''}
//           width={'fill-parent'}
//         />
//         <SVG src={buttonSubstracSrc} onClick={() => handleRemoveElements(i)} />
//       </AutoLayout>
//     );
//   }

//   // const handleNewWidget = async () => {
//   //   // Esperar un breve período de tiempo para asegurarse de que la selección esté disponible
//   //   await new Promise(resolve => setTimeout(resolve, 100));

//   //   // Obtener la selección actual
//   //   const selection = figma.currentPage.selection;

//   //   // Verificar si hay un widget seleccionado
//   //   if (selection.length > 0) {
//   //     // Obtener el widget actualmente seleccionado
//   //     const widget = selection[0] as FrameNode;

//   //     // Clonar el widget
//   //     const newWidget = widget.clone();

//   //     // Posicionar el nuevo widget al lado del widget original
//   //     newWidget.x += widget.width + 20;

//   //     // Añadir el nuevo widget a la página actual
//   //     figma.currentPage.appendChild(newWidget);
//   //   } else {
//   //     // Si no hay ningún widget seleccionado, muestra un mensaje de error en la consola
//   //     console.error('No se seleccionó ningún widget.');
//   //   }
//   // };

//   return (
//     <Frame name='Widget' overflow='visible' width={450} height={'fill-parent'}>
//       <AutoLayout
//         name='DataTracking'
//         effect={{
//           type: 'drop-shadow',
//           color: '#00000040',
//           offset: {
//             x: 0,
//             y: 0
//           },
//           blur: 6,
//           spread: 2,
//           showShadowBehindNode: false
//         }}
//         fill='#FFF'
//         cornerRadius={8}
//         direction='vertical'
//         padding={{
//           top: 0,
//           right: 0,
//           bottom: 24,
//           left: 0
//         }}
//         width={400}
//         horizontalAlignItems='center'
//         hidden={!open}
//         x={50}
//         y={50}
//       >
//         <AutoLayout
//           name='Header'
//           fill='#EEE'
//           spacing={'auto'}
//           padding={{
//             vertical: 10,
//             horizontal: 16
//           }}
//           width={400}
//           height={41}
//           verticalAlignItems='center'
//         >
//           <AutoLayout
//             name='Text'
//             overflow='visible'
//             horizontalAlignItems='center'
//             verticalAlignItems='center'
//           >
//             <Text
//               name='Data Tracking'
//               fill='#000'
//               horizontalAlignText='center'
//               fontFamily='Consolas'
//               fontSize={12}
//               fontWeight={700}
//             >
//               Data Tracking
//             </Text>
//           </AutoLayout>

//           <SVG src={buttonSrc} onClick={handleNewWidget} />
//         </AutoLayout>

//         <AutoLayout
//           name='main'
//           overflow='visible'
//           direction='vertical'
//           spacing={8}
//           padding={16}
//           width={400}
//           horizontalAlignItems='center'
//         >
//           <AutoLayout
//             name='descrption'
//             overflow='visible'
//             spacing={10}
//             width={368}
//             horizontalAlignItems='start'
//             verticalAlignItems='center'
//           >
//             <Text
//               name='Description:'
//               fill='#000'
//               horizontalAlignText='center'
//               fontFamily='Consolas'
//               fontSize={12}
//             >
//               Description:
//             </Text>
//           </AutoLayout>

//           <Input
//             fontSize={fontSize}
//             fontWeight='normal'
//             inputFrameProps={{
//               cornerRadius: 4,
//               effect: shadow,
//               hidden: !open,
//               horizontalAlignItems: 'center',
//               overflow: 'visible',
//               padding,
//               stroke: color,
//               strokeWidth,
//               verticalAlignItems: 'center'
//             }}
//             onTextEditEnd={(e) => setText(e.characters.trim())}
//             placeholder='Description...'
//             value={text}
//             width={368}
//             x={size}
//             y={size}
//           />
//         </AutoLayout>

//         <AutoLayout
//           name='descrption'
//           overflow='visible'
//           spacing={10}
//           width={368}
//           direction='vertical'
//           horizontalAlignItems='start'
//           verticalAlignItems='center'
//           stroke='#EEEEEE'
//           padding={8}
//           cornerRadius={4}
//         >
//           <AutoLayout
//             direction='horizontal'
//             width={'fill-parent'}
//             spacing={'auto'}
//           >
//             <Text
//               name='Description:'
//               fill='#000'
//               horizontalAlignText='left'
//               fontFamily='Consolas'
//               fontSize={12}
//             >
//               Event properties:
//             </Text>
//             <SVG src={buttonPlusSrc} onClick={handleAddElements} />
//           </AutoLayout>

//           <AutoLayout
//             direction='horizontal'
//             width={'fill-parent'}
//             spacing={8}
//             horizontalAlignItems='center'
//           >
//             <Text
//               name='Description:'
//               fill='#8F8F8F'
//               horizontalAlignText='center'
//               fontFamily='Consolas'
//               fontSize={10}
//               width={'fill-parent'}
//             >
//               Property:
//             </Text>
//             <Text
//               name='Description:'
//               fill='#8F8F8F'
//               horizontalAlignText='center'
//               fontFamily='Consolas'
//               fontSize={10}
//               width={'fill-parent'}
//             >
//               Note:
//             </Text>
//           </AutoLayout>
//           {additionalInputs}
//         </AutoLayout>

//         <AutoLayout></AutoLayout>
//       </AutoLayout>

//       {/* Icon Pin */}
//       <Rectangle
//         cornerRadius={cornerRadius}
//         fill={color}
//         height={size}
//         hoverStyle={{ opacity: 0.7 }}
//         onClick={() => setOpen(!open)}
//         width={size}
//         effect={shadow}
//       />
//     </Frame>
//   );
// }

// widget.register(Widget);
