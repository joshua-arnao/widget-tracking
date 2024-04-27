const { widget } = figma;
const {
  useEffect,
  Text,
  AutoLayout,
  usePropertyMenu,
  useSyncedState,
  Frame,
  Input,
  Rectangle,
  SVG
} = widget;

const buttonSrc = `
<svg width='16' height='18' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
<g clip-path='url(#clip0_14_167)'>
<path d='M16.0002 15.4958C16.0018 15.8078 15.9371 16.1165 15.8103 16.4016C15.6836 16.6867 15.4977 16.9415 15.265 17.1493C15.0323 17.3571 14.7581 17.5131 14.4606 17.6069C14.163 17.7007 13.849 17.7301 13.5392 17.6934C12.4114 17.5265 11.585 16.5452 11.6125 15.4055V2.30281C11.5853 1.16193 12.4137 0.180056 13.5429 0.0149935C13.8524 -0.0212412 14.1661 0.00864971 14.4632 0.102689C14.7603 0.196729 15.034 0.352773 15.2663 0.560502C15.4986 0.768231 15.6841 1.02291 15.8106 1.30769C15.9371 1.59248 16.0017 1.90088 16.0002 2.21249V15.4958Z' fill='#F9AB00'/>
<path d='M2.19381 13.3246C3.40544 13.3246 4.38763 14.3068 4.38763 15.5184C4.38763 16.73 3.40544 17.7122 2.19381 17.7122C0.982188 17.7122 0 16.73 0 15.5184C0 14.3068 0.982188 13.3246 2.19381 13.3246ZM7.96619 6.67537C6.74888 6.74212 5.80431 7.76324 5.83262 8.98212V14.8749C5.83262 16.4742 6.53631 17.4451 7.56731 17.652C7.88695 17.7168 8.21701 17.7096 8.53354 17.631C8.85006 17.5524 9.14513 17.4043 9.39732 17.1975C9.64951 16.9907 9.85252 16.7304 9.9916 16.4354C10.1307 16.1404 10.2024 15.8181 10.2014 15.492V8.88056C10.202 8.58828 10.1443 8.29882 10.0318 8.02907C9.91926 7.75932 9.75415 7.51468 9.54608 7.30941C9.33801 7.10415 9.09115 6.94237 8.81989 6.83353C8.54864 6.72468 8.25843 6.67087 7.96619 6.67537Z' fill='#E37400'/>
</g>
<defs>
<clipPath id='clip0_14_167'>
<rect width='16' height='17.75' fill='white'/>
</clipPath>
</defs>
</svg>
`;
const buttonPlusSrc = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_14_185)">
<path d="M8 0C3.58175 0 0 3.58175 0 8C0 12.4185 3.58175 16 8 16C12.4185 16 16 12.4185 16 8C16 3.58175 12.4185 0 8 0ZM8 15.0157C4.14025 15.0157 1 11.8597 1 7.99997C1 4.14022 4.14025 0.999969 8 0.999969C11.8597 0.999969 15 4.14023 15 7.99997C15 11.8597 11.8597 15.0157 8 15.0157ZM11.5 7.5H8.5V4.5C8.5 4.224 8.276 4 8 4C7.724 4 7.5 4.224 7.5 4.5V7.5H4.5C4.224 7.5 4 7.724 4 8C4 8.276 4.224 8.5 4.5 8.5H7.5V11.5C7.5 11.776 7.724 12 8 12C8.276 12 8.5 11.776 8.5 11.5V8.5H11.5C11.776 8.5 12 8.276 12 8C12 7.724 11.776 7.5 11.5 7.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_14_185">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const buttonSubstracSrc = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_56_1992)">
<path d="M4.57144 8.00001H11.4286M8.00001 15.4286C9.97019 15.4286 11.8597 14.6459 13.2528 13.2528C14.6459 11.8597 15.4286 9.97019 15.4286 8.00001C15.4286 6.02983 14.6459 4.14035 13.2528 2.74722C11.8597 1.35409 9.97019 0.571442 8.00001 0.571442C6.02983 0.571442 4.14035 1.35409 2.74722 2.74722C1.35409 4.14035 0.571442 6.02983 0.571442 8.00001C0.571442 9.97019 1.35409 11.8597 2.74722 13.2528C4.14035 14.6459 6.02983 15.4286 8.00001 15.4286Z" stroke="#BF3C3C" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_56_1992">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const fills = [
  '#3366ff',
  '#9933ff',
  '#ff33cc',
  '#ff3333',
  '#ffcc33',
  '#99ff33',
  '#33ff66',
  '#33ffff'
];
function Widget() {
  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === 'showToast') {
        figma.notify('Hello widget');
      }
      if (msg.type === 'close') {
        figma.closePlugin();
      }
    };
  });

  const [open, setOpen] = useSyncedState('open', true);
  const [color, setColor] = useSyncedState('color', fills[0]);
  const [size] = useSyncedState('size', 50);
  const [inputs, setInputs] = useSyncedState('inputs', [
    { property: '', value: '' }
  ]);
  const [additionalElements, setAdditionalElements] = useSyncedState(
    'additionalElements',
    0
  );

  usePropertyMenu(
    open
      ? [
          {
            itemType: 'color-selector',
            options: fills.map((a) => ({ tooltip: a, option: a })),
            selectedOption: color,
            tooltip: 'Color',
            propertyName: 'color'
          },
          {
            itemType: 'action',
            tooltip: 'Duplicate Widget',
            propertyName: 'duplicateWidget',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
            <path d="M9 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14V2H2V14H9V12L13 15L9 18V16ZM17 20V6H6V12H4V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V18H6V20H17Z" fill="white"/>
            </svg>`
          },
          {
            itemType: 'action',
            tooltip: 'New Widget',
            propertyName: 'newWidget',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 19V5H12V12H19V13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H13.35C13.13 20.37 13 19.7 13 19H5ZM14 4.5L19.5 10H14V4.5ZM23 18V20H20V23H18V20H15V18H18V15H20V18H23Z" fill="white"/>
            </svg>`
          }
        ]
      : [],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'color' && propertyValue) {
        setColor(propertyValue);
      }
      if (propertyName === 'duplicateWidget') {
        handleDuplicateWidget();
      }
      if (propertyName === 'newWidget') {
        handleNewWidget();
      }
    }
  );

  const handleDuplicateWidget = () => {
    const selection = figma.currentPage.selection;

    if (selection.length === 1 && selection[0]) {
      const widgetNode = selection[0] as FrameNode;
      const newWidgetNode = widgetNode.clone();
      newWidgetNode.name = `${widgetNode.name}`;
      newWidgetNode.x += 450;
      newWidgetNode.y += 0;

      // Puedes ajustar otras propiedades del nuevo widget aquí si es necesario

      figma.currentPage.appendChild(newWidgetNode);
      figma.notify('Duplicate widget successfully created.');
    } else {
      figma.notify('Choose a widget to duplicate.');
    }
  };

  const handleNewWidget = () => {
    const selection = figma.currentPage.selection;

    if (selection.length === 1 && selection[0]) {
      const widgetNode = selection[0] as FrameNode;
      const newWidgetNode = widgetNode.clone();
      newWidgetNode.name = `${widgetNode.name}`;

      // Puedes ajustar otras propiedades del nuevo widget aquí si es necesario

      figma.currentPage.appendChild(newWidgetNode);
      figma.notify('New widget successfully created.');

      if (widgetNode.parent) {
        // Insertar el nuevo widget al principio de la lista de hijos del contenedor
        widgetNode.parent.insertChild(0, newWidgetNode);
        widgetNode.x += 450;
        widgetNode.y += 0;
      } else {
        figma.currentPage.appendChild(newWidgetNode);
      }

      setInputs([{ property: '', value: '' }]);
      setAdditionalElements(0);
    } else {
      figma.notify('Choose a widget to create a new one.');
    }
  };

  const fontSize = 10;
  const padding = size * 0.2;
  const strokeWidth = 1;

  const cornerRadius: WidgetJSX.CornerRadius = {
    topLeft: size,
    topRight: size,
    bottomLeft: strokeWidth,
    bottomRight: size
  };

  const shadow: WidgetJSX.Effect = {
    type: 'drop-shadow',
    color: '#00000040',
    offset: { x: 0, y: 5 },
    blur: 15,
    showShadowBehindNode: false
  };

  const handleRemoveElements = (indexToRemove: number) => {
    setInputs((prevInputs) => {
      // Filtrar los inputs que no corresponden a la fila que se está eliminando
      const filteredInputs = prevInputs.filter(
        (_, index) => index !== indexToRemove && index !== indexToRemove + 1
      );
      return filteredInputs;
    });

    setAdditionalElements((prev) => prev - 2);
  };

  const handleAddElements = () => {
    setAdditionalElements((prev) => prev + 2);
  };

  const handleValueChange = (index: number, newValue: string) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      if (index < newInputs.length) {
        newInputs[index].value = newValue;
      } else {
        for (let i = newInputs.length; i <= index; i++) {
          newInputs.push({ property: '', value: '' });
        }
        newInputs[index].value = newValue;
      }
      return newInputs;
    });
  };

  const additionalInputs = [];
  for (let i = 3; i < additionalElements; i += 2) {
    const propertyIndex = i;
    const valueIndex = i + 1;

    additionalInputs.push(
      <AutoLayout
        key={i}
        direction='horizontal'
        width={'fill-parent'}
        spacing={8}
        verticalAlignItems='center'
        name='eventProperties'
      >
        <Input
          name='TagInput'
          fontSize={fontSize}
          fontWeight='normal'
          fontFamily='Quicksand'
          inputFrameProps={{
            cornerRadius: 4,
            effect: shadow,
            hidden: !open,
            horizontalAlignItems: 'center',
            overflow: 'visible',
            padding,
            stroke: color,
            strokeWidth,
            verticalAlignItems: 'center'
          }}
          // onTextEditEnd={(e) => setText(e.characters.trim())}
          onTextEditEnd={(event) =>
            handleValueChange(propertyIndex, event.characters.trim())
          }
          placeholder='Property...'
          value={inputs[propertyIndex]?.value || ''}
          width={'fill-parent'}
        />
        <Input
          name='eventInput'
          fontSize={fontSize}
          fontWeight='normal'
          fontFamily='Quicksand'
          inputFrameProps={{
            cornerRadius: 4,
            effect: shadow,
            hidden: !open,
            horizontalAlignItems: 'center',
            overflow: 'visible',
            padding,
            stroke: color,
            strokeWidth,
            verticalAlignItems: 'center'
          }}
          // onTextEditEnd={(e) => setText(e.characters.trim())}
          onTextEditEnd={(event) =>
            handleValueChange(valueIndex, event.characters.trim())
          }
          placeholder='Event...'
          // value={text}
          value={inputs[valueIndex]?.value || ''}
          width={'fill-parent'}
        />
        <SVG
          name='iconSubstrac'
          src={buttonSubstracSrc}
          onClick={() => handleRemoveElements(i)}
        />
      </AutoLayout>
    );
  }

  return (
    <Frame name='Widget' overflow='visible' width={450} height={'fill-parent'}>
      <AutoLayout
        name='DataTracking'
        effect={{
          type: 'drop-shadow',
          color: '#00000040',
          offset: {
            x: 0,
            y: 0
          },
          blur: 6,
          spread: 2,
          showShadowBehindNode: false
        }}
        fill='#FFF'
        cornerRadius={8}
        direction='vertical'
        padding={{
          top: 0,
          right: 0,
          bottom: 24,
          left: 0
        }}
        width={400}
        horizontalAlignItems='center'
        hidden={!open}
        x={50}
        y={50}
      >
        <AutoLayout
          name='Header'
          fill='#EEE'
          spacing={'auto'}
          padding={{
            vertical: 10,
            horizontal: 16
          }}
          width={400}
          height={41}
          verticalAlignItems='center'
        >
          <AutoLayout
            name='Text'
            overflow='visible'
            horizontalAlignItems='center'
            verticalAlignItems='center'
          >
            <Text
              name='Data Tracking'
              fill='#000'
              horizontalAlignText='center'
              fontFamily='Quicksand'
              fontSize={12}
              fontWeight={700}
            >
              Data Tracking
            </Text>
          </AutoLayout>

          <SVG src={buttonSrc} />
        </AutoLayout>

        <AutoLayout
          name='main'
          overflow='visible'
          direction='vertical'
          spacing={8}
          padding={16}
          width={400}
          horizontalAlignItems='center'
        >
          <AutoLayout
            name='basic'
            direction='horizontal'
            width={'fill-parent'}
            spacing={8}
            verticalAlignItems='center'
          >
            <AutoLayout
              name='page'
              direction='vertical'
              overflow='visible'
              spacing={10}
              width={'fill-parent'}
              horizontalAlignItems='start'
              verticalAlignItems='center'
            >
              <Text
                name='labelPage'
                fill='#000'
                horizontalAlignText='center'
                fontFamily='Fira Mono'
                fontSize={11}
              >
                Page:
              </Text>

              <Input
                name='inputPage'
                fontSize={fontSize}
                fontWeight='normal'
                inputFrameProps={{
                  cornerRadius: 4,
                  effect: shadow,
                  hidden: !open,
                  horizontalAlignItems: 'center',
                  overflow: 'visible',
                  padding,
                  stroke: color,
                  strokeWidth,
                  verticalAlignItems: 'center'
                }}
                onTextEditEnd={(e) => handleValueChange(0, e.characters.trim())}
                placeholder='Page...'
                value={inputs[0]?.value || ''}
                width={'fill-parent'}
                fontFamily='Quicksand'
              />
            </AutoLayout>
            <AutoLayout
              name='element'
              direction='vertical'
              overflow='visible'
              spacing={10}
              width={'fill-parent'}
              horizontalAlignItems='start'
              verticalAlignItems='center'
            >
              <Text
                name='labelElemet'
                fill='#000'
                horizontalAlignText='center'
                fontFamily='Fira Mono'
                fontSize={11}
              >
                Element:
              </Text>

              <Input
                name='inputElemet'
                fontSize={fontSize}
                fontWeight='normal'
                inputFrameProps={{
                  cornerRadius: 4,
                  effect: shadow,
                  hidden: !open,
                  horizontalAlignItems: 'center',
                  overflow: 'visible',
                  padding,
                  stroke: color,
                  strokeWidth,
                  verticalAlignItems: 'center'
                }}
                onTextEditEnd={(e) => handleValueChange(1, e.characters.trim())}
                placeholder='Element...'
                value={inputs[1]?.value || ''}
                width={'fill-parent'}
                fontFamily='Quicksand'
              />
            </AutoLayout>
          </AutoLayout>

          <AutoLayout
            name='description'
            direction='vertical'
            overflow='visible'
            spacing={10}
            width={368}
            horizontalAlignItems='start'
            verticalAlignItems='center'
          >
            <Text
              name='labelDescription:'
              fill='#000'
              horizontalAlignText='center'
              fontFamily='Fira Mono'
              fontSize={11}
            >
              Description:
            </Text>

            <Input
              name='inputDescription'
              fontSize={fontSize}
              fontWeight='normal'
              inputFrameProps={{
                cornerRadius: 4,
                effect: shadow,
                hidden: !open,
                horizontalAlignItems: 'center',
                overflow: 'visible',
                padding,
                stroke: color,
                strokeWidth,
                verticalAlignItems: 'center'
              }}
              onTextEditEnd={(e) => handleValueChange(2, e.characters.trim())}
              placeholder='Description...'
              value={inputs[2]?.value || ''}
              width={368}
              fontFamily='Quicksand'
            />
          </AutoLayout>

          <AutoLayout
            name='details'
            overflow='visible'
            spacing={10}
            width={368}
            direction='vertical'
            horizontalAlignItems='start'
            verticalAlignItems='center'
            stroke='#EEEEEE'
            padding={8}
            cornerRadius={4}
          >
            <AutoLayout
              direction='horizontal'
              width={'fill-parent'}
              spacing={'auto'}
            >
              <Text
                name='detailsLabel:'
                fill='#000'
                horizontalAlignText='left'
                fontFamily='Fira Mono'
                fontSize={11}
              >
                Event properties:
              </Text>
              <SVG
                src={buttonPlusSrc}
                onClick={handleAddElements}
                name='iconPlus'
              />
            </AutoLayout>

            <AutoLayout
              direction='horizontal'
              width={'fill-parent'}
              spacing={8}
              horizontalAlignItems='center'
            >
              <Text
                name='idTag'
                fill='#8F8F8F'
                horizontalAlignText='center'
                fontFamily='Fira Mono'
                fontSize={10}
                width={'fill-parent'}
              >
                Id Tag
              </Text>
              <Text
                name='event'
                fill='#8F8F8F'
                horizontalAlignText='center'
                fontFamily='Fira Mono'
                fontSize={10}
                width={'fill-parent'}
              >
                Event
              </Text>
              <Rectangle width={24} height={12} />
            </AutoLayout>
            {additionalInputs}
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>

      {/* Icon Pin */}
      <Rectangle
        cornerRadius={cornerRadius}
        fill={color}
        height={size}
        hoverStyle={{ opacity: 0.7 }}
        onClick={() => setOpen(!open)}
        width={size}
        effect={shadow}
      />
    </Frame>
  );
}

widget.register(Widget);
