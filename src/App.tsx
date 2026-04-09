import { useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

interface Destination {
  name?: string;
  imageUrl?: string;
}

interface Trip {
  ref: string;
  title: string;
  description: string;
  emoji: string;
  destination?: Destination;
}

const DreamVacationPage = () => {
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImagePreview(result);
      setImageBase64(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setTrips([]);
    try {
      const response = await fetch("/api/runAction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: "/flow/dreamVacation",
          input: {
            description,
            imageUrls: imageBase64 ? [imageBase64] : [],
          },
        }),
      });
      const data = await response.json();
      if (data.result) {
        setTrips(data.result);
      } else {
        setError("No se encontraron resultados.");
      }
    } catch {
      setError("Error al conectar con el servidor de IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Encuentra tu viaje ideal con IA ✈️
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
        <TextField
          label="Describe tu viaje ideal"
          placeholder="Ej: playa tranquila con buen surf y comida local"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />

        <Box>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <Button
            variant="outlined"
            onClick={() => fileInputRef.current?.click()}
          >
            Subir imagen de inspiración (opcional)
          </Button>
        </Box>

        {imagePreview && (
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <img
              src={imagePreview}
              alt="preview"
              style={{ maxHeight: 200, borderRadius: 8, objectFit: "cover" }}
            />
            <Button
              size="small"
              onClick={() => {
                setImagePreview(null);
                setImageBase64(null);
              }}
              sx={{
                position: "absolute",
                top: 4,
                right: 4,
                minWidth: 0,
                background: "#000000aa",
                color: "#fff",
              }}
            >
              ✕
            </Button>
          </Box>
        )}

        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={loading || (!description && !imageBase64)}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Buscar con IA"
          )}
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {trips.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Sugerencias para ti
          </Typography>
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {trips.map((trip) => (
              <Card key={trip.ref} sx={{ width: 300 }}>
                {trip.destination?.imageUrl && (
                  <CardMedia
                    image={trip.destination.imageUrl}
                    title={trip.title}
                    sx={{ height: 180 }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {trip.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {trip.destination?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {trip.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}
    </Container>
  );
};

export default DreamVacationPage;
