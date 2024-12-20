const selector = document.querySelector('#project');

const projects = [
  {
    id: 'arduino-1',
    name: 'Home Automation',
    averageRating: 4.5,
  },
  {
    id: 'arduino-2',
    name: 'Robotics',
    averageRating: 4.7,
  },
  {
    id: 'arduino-3',
    name: 'IoT Devices',
    averageRating: 3.5,
  },
  {
    id: 'arduino-4',
    name: 'Wearable Electronics',
    averageRating: 3.9,
  },
  {
    id: 'arduino-5',
    name: 'Sensor-Based Projects',
    averageRating: 5.0,
  },
  {
    id: 'arduino-6',
    name: 'LED Art and Lighting',
    averageRating: 4.2,
  },
  {
    id: 'arduino-7',
    name: 'Game Development',
    averageRating: 4.0,
  },
  {
    id: 'arduino-8',
    name: 'Audio and Music Projects',
    averageRating: 3.8,
  },
];

projects.forEach((project) => {
  const option = document.createElement('option');
  option.setAttribute('value', project.name);
  option.setAttribute('id', project.id);
  option.innerHTML = project.name;

  selector.appendChild(option);
});
