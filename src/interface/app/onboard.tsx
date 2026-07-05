import React from 'react';
import { Box, ConfirmInput, Text } from 'ink';
import { Logo } from '@/interface/components/logo.tsx';
import { useTerminalDimensions } from '../hooks/use-terminal-dimensions.ts';
import { useRouter } from '../hooks/use-router.ts';

export default function Onboard() {
  const { cols, rows } = useTerminalDimensions();
  const { navigate } = useRouter();

  function accept() {
    navigate('home');
  }

  return (
    <Box width={cols} height={rows} padding={2} gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
      <Box flexDirection='column' gap={1}>
        <Box justifyContent='space-between'>
          <Text>Welcome to</Text>
          <Text dimColor>v0.1.0</Text>
        </Box>
        <Logo />
      </Box>

      <Box gap={1}>
        <Text>The open-source AI multi-agent framework by</Text>
        <Text color='blue'>https://neku.pawbs.de</Text>
      </Box>

      <Box borderStyle='single' borderColor='red' padding={1} marginTop={1}>
        <Box flexDirection='column'>
          <Text color='red' bold>WARNING</Text>
          <Text>Agents may cause damage regardless of their permissions.</Text>
          <Text>Use them responsibly.</Text>
          <Text>The maintainers of this open-source project are not liable for any consequences.</Text>
        </Box>
      </Box>

      <Box gap={1}>
        <Text>Do you want to proceed?</Text>
        <ConfirmInput
          onConfirm={accept}
          onCancel={() => Deno.exit(0)}
        />
      </Box>
    </Box>
  );
}
