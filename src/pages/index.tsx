/**
 * This is a Next.js page.
 */
import { Box, Container, Typography } from "@mui/material";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  const result = trpc.greeting.useQuery({ name: "client" });

  if (!result.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js Edge Runtime + TRPC example in TypeScript
        </Typography>
        <h1>{result.data.text}</h1>
        {/**
         * The type is defined and can be autocompleted
         * 💡 Tip: Hover over `data` to see the result type
         * 💡 Tip: CMD+Click (or CTRL+Click) on `text` to go to the server definition
         * 💡 Tip: Secondary click on `text` and "Rename Symbol" to rename it both on the client & server
         */}
      </Box>
    </Container>
  );
}
