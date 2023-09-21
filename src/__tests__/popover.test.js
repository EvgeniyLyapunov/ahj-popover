import Popover from '../components/popover/Popover';

test('should show popover widget when cklick on element', () => {
  document.body.innerHTML = '<button class="btn"></button>';
  const button = document.querySelector('.btn');

  const popover = new Popover(button, 'title', 'text');
  button.click();
  expect(document.querySelector('.popover-bottom')).not.toBeUndefined();
  button.click();
  expect(document.querySelector('.popover-bottom')).toBeNull();
});

test('should close popover widget when cklick on element with popover', () => {
  document.body.innerHTML = '<button class="btn"></button>';
  const button = document.querySelector('.btn');

  const popover = new Popover(button, 'title', 'text');
  button.click();
  button.click();
  expect(document.querySelector('.popover-bottom')).toBeNull();
});
