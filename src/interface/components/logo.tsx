import React from 'react';
import figlet from 'npm:figlet@1.11.0';
import { Text } from 'ink';

export function Logo() {
  const text = figlet.textSync('Sidekick', { font: 'ANSI Shadow' });

  return <Text>{text}</Text>;
}
