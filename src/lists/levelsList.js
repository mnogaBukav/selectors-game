const levels = [
  {
    index: 0,
    levelName: 'A',
    levelAnswer: 'carbon',
    description: 'Select carbon',
    table: [
      {
        name: 'carbon',
        target: true,
        children: [],
      },
      {
        name: 'box',
        children: [],
      },
      {
        name: 'carbon',
        target: true,
        children: [],
      },
    ],
  },
  {
    index: 1,
    levelName: '#id',
    levelAnswer: '#square-patch',
    description: 'Select the square patch',
    table: [
      {
        name: 'patch',
        children: [],
      },
      {
        name: 'patch',
        target: true,
        id: 'square-patch',
        children: [],
      },
      {
        name: 'carbon',
        children: [],
      },
    ],
  },
  {
    index: 2,
    levelName: 'A B',
    levelAnswer: 'box termometer',
    description: 'Select the termometer in the box',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'iodine',
            children: [],
          },
        ],
      },
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'termometer',
            target: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 3,
    levelName: '#id A',
    levelAnswer: '#red painkiller',
    description: 'Select the painkiller in the red box',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'painkiller',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'bandage',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'painkiller',
            target: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 4,
    levelName: '.className',
    levelAnswer: '.pill',
    description: 'Select all pills',
    table: [
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'painkiller',
            target: true,
            className: 'pill',
            children: [],
          },
          {
            name: 'painkiller',
            children: [],
          },
        ],
      },
      {
        name: 'carbon',
        target: true,
        className: 'pill',
        children: [],
      },
      {
        name: 'carbon',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'carbon',
            children: [],
          },
          {
            name: 'painkiller',
            target: true,
            className: 'pill',
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 5,
    levelName: 'A.className',
    levelAnswer: 'painkiller.pill',
    description: 'Select all painkiller pills',
    table: [
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'termometer',
            children: [],
          },
          {
            name: 'painkiller',
            target: true,
            className: 'pill',
            children: [],
          },
        ],
      },
      {
        name: 'painkiller',
        target: true,
        className: 'pill',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'painkiller',
            target: true,
            className: 'pill',
            children: [],
          },
          {
            name: 'patch',
            id: 'square-patch',
            children: [],
          },
        ],
      },
      {
        name: 'painkiller',
        children: [],
      },
    ],
  },
  {
    index: 6,
    levelName: 'A, B',
    levelAnswer: 'iodine, box',
    description: 'Select iodine and all boxes',
    table: [
      {
        name: 'iodine',
        target: true,
        children: [],
      },
      {
        name: 'box',
        target: true,
        id: 'red',
        children: [
          {
            name: 'patch',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        target: true,
        children: [
          {
            name: 'painkiller',
            children: [],
          },
          {
            name: 'carbon',
            children: [],
          },
        ],
      },
      {
        name: 'patch',
        id: 'square-patch',
        children: [],
      },
    ],
  },
  {
    index: 7,
    levelName: '*',
    levelAnswer: '*',
    description: 'Select everything',
    table: [
      {
        name: 'box',
        target: true,
        id: 'red',
        children: [
          {
            name: 'termometer',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'termometer',
        target: true,
        children: [],
      },
      {
        name: 'box',
        target: true,
        children: [
          {
            name: 'iodine',
            target: true,
            children: [],
          },
          {
            name: 'bandage',
            target: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 8,
    levelName: 'A *',
    levelAnswer: 'box *',
    description: 'Select everything in boxes',
    table: [
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'termometer',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'box',
        children: [
          {
            name: 'iodine',
            target: true,
            children: [],
          },
          {
            name: 'bandage',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'box',
        children: [
          {
            name: 'patch',
            target: true,
            children: [],
          },
          {
            name: 'carbon',
            target: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 9,
    levelName: 'A + B',
    levelAnswer: 'bandage + carbon',
    description: "Select every carbon that's next to a bandage",
    table: [
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'bandage',
            children: [],
          },
          {
            name: 'carbon',
            target: true,
            className: 'pill',
            children: [],
          },
        ],
      },
      {
        name: 'carbon',
        children: [],
      },
      {
        name: 'bandage',
        children: [],
      },
      {
        name: 'carbon',
        target: true,
        children: [],
      },
      {
        name: 'carbon',
        className: 'pill',
        children: [],
      },
    ],
  },
  {
    index: 10,
    levelName: 'A > B',
    levelAnswer: 'box > termometer',
    description: 'Select termometer directly on a box',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'termometer',
            target: true,
            children: [],
          },
          {
            name: 'iodine',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        children: [
          {
            name: 'patch',
            children: [],
          },
          {
            name: 'termometer',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'termometer',
        children: [],
      },
    ],
  },
  {
    index: 11,
    levelName: ':first-child',
    levelAnswer: 'patch:first-child',
    description: 'Select the first patches',
    table: [
      {
        name: 'patch',
        target: true,
        id: 'square-patch',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'patch',
            target: true,
            children: [],
          },
          {
            name: 'termometer',
            children: [],
          },
        ],
      },
      {
        name: 'patch',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'patch',
            target: true,
            children: [],
          },
          {
            name: 'carbon',
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 12,
    levelName: ':only-child',
    levelAnswer: 'painkiller:only-child, bandage:only-child',
    description: 'Select the painkiller and the bandage on the boxes',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'painkiller',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'patch',
            id: 'patch-square',
            children: [],
          },
          {
            name: 'termometer',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'bandage',
            target: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 13,
    levelName: ':last-child',
    levelAnswer: 'termometer:last-child',
    description: 'Select latest thermometers',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'termometer',
            children: [],
          },
          {
            name: 'termometer',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'termometer',
            children: [],
          },
          {
            name: 'termometer',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'termometer',
        target: true,
        children: [],
      },
    ],
  },
  {
    index: 14,
    levelName: ':nth-child(A)',
    levelAnswer: 'carbon:nth-child(4)',
    description: 'Select the fourth carbon',
    table: [
      {
        name: 'carbon',
        className: 'pill',
        children: [],
      },
      {
        name: 'carbon',
        children: [],
      },
      {
        name: 'carbon',
        className: 'pill',
        children: [],
      },
      {
        name: 'carbon',
        target: true,
        className: 'pill',
        children: [],
      },
      {
        name: 'carbon',
        children: [],
      },
    ],
  },
  {
    index: 15,
    levelName: ':nth-last-child',
    levelAnswer: 'bandage:nth-last-child(4)',
    description: 'Select the 1st bandage on the table',
    table: [
      {
        name: 'iodine',
        children: [],
      },
      {
        name: 'bandage',
        target: true,
        children: [],
      },
      {
        name: 'bandage',
        children: [],
      },
      {
        name: 'iodine',
        children: [],
      },
      {
        name: 'bandage',
        children: [],
      },
    ],
  },
  {
    index: 16,
    levelName: ':first-of-type',
    levelAnswer: 'patch:first-of-type',
    description: 'Select the first patch on the table and in the box',
    table: [
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'patch',
        target: true,
        children: [],
      },
      {
        name: 'painkiller',
        children: [],
      },
      {
        name: 'patch',
        id: 'square-patch',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'patch',
            target: true,
            id: 'square-patch',
            children: [],
          },
          {
            name: 'patch',
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 17,
    levelName: ':nth-of-type(A)',
    levelAnswer: 'painkiller:nth-of-type(odd)',
    description: 'Select all odd painkellrs',
    table: [
      {
        name: 'painkiller',
        target: true,
        className: 'pill',
        children: [],
      },
      {
        name: 'painkiller',
        children: [],
      },
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'painkiller',
        target: true,
        className: 'pill',
        children: [],
      },
      {
        name: 'painkiller',
        children: [],
      },
      {
        name: 'painkiller',
        target: true,
        children: [],
      },
      {
        name: 'painkiller',
        className: 'pill',
        children: [],
      },
    ],
  },
  {
    index: 18,
    levelName: ':nth-of-type(An + B)',
    levelAnswer: 'termometer:nth-of-type(2n+3)',
    description: 'Select every 2nd termometer, starting from the 3rd',
    table: [
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'termometer',
        target: true,
        children: [],
      },
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'termometer',
        target: true,
        children: [],
      },
      {
        name: 'termometer',
        children: [],
      },
      {
        name: 'termometer',
        target: true,
        children: [],
      },
      {
        name: 'termometer',
        children: [],
      },
    ],
  },
  {
    index: 19,
    levelName: ':only-of-type',
    levelAnswer: 'box carbon:only-of-type',
    description: 'Select all odd painkellrs',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'carbon',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'carbon',
            target: true,
            className: 'pill',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        id: 'red',
        children: [
          {
            name: 'carbon',
            className: 'pill',
            children: [],
          },
          {
            name: 'carbon',
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 20,
    levelName: ':last-of-type',
    levelAnswer: 'iodine:last-of-type',
    description: 'Select iodine in the box and the last one',
    table: [
      {
        name: 'iodine',
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'patch',
            children: [],
          },
          {
            name: 'iodine',
            target: true,
            children: [],
          },
        ],
      },
      {
        name: 'carbon',
        children: [],
      },
      {
        name: 'iodine',
        target: true,
        children: [],
      },
    ],
  },
  {
    index: 21,
    levelName: ':empty',
    levelAnswer: 'box:empty',
    description: 'Select empty boxes',
    table: [
      {
        name: 'box',
        children: [
          {
            name: 'bandage',
            children: [],
          },
          {
            name: 'termometer',
            children: [],
          },
        ],
      },
      {
        name: 'box',
        target: true,
        id: 'red',
        children: [],
      },
      {
        name: 'box',
        target: true,
        children: [],
      },
      {
        name: 'box',
        children: [
          {
            name: 'painkiller',
            children: [],
          },
          {
            name: 'carbon',
            children: [],
          },
        ],
      },
    ],
  },
  {
    index: 22,
    levelName: ':not',
    levelAnswer: 'carbon:not(.pill), painkiller:not(.pill)',
    description: 'Select packs of pills',
    table: [
      {
        name: 'carbon',
        className: 'pill',
        children: [],
      },
      {
        name: 'carbon',
        target: true,
        children: [],
      },
      {
        name: 'painkiller',
        className: 'pill',
        children: [],
      },
      {
        name: 'painkiller',
        className: 'pill',
        children: [],
      },
      {
        name: 'carbon',
        className: 'pill',
        children: [],
      },
      {
        name: 'painkiller',
        target: true,
        children: [],
      },
    ],
  },
];

export default levels;
