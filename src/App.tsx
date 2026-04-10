import { useRef, useState } from "react";
import {
  Backdrop,
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Trip {
  ref: string;
  title: string;
  description: string;
  reason: string;
  imageUrl: string;
  name: string;
  destination?: string;
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
    <>
      <Backdrop
        open={loading}
        sx={{
          zIndex: 9999,
          color: "#1976d2",
          flexDirection: "column",
          gap: 2,
          bgcolor: "#fff",
        }}
      >
        <CircularProgress color="inherit" size={60} />
        <Typography variant="h6">Buscando tu viaje ideal...</Typography>
      </Backdrop>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Encuentra tu viaje ideal en Perú con IA ✈️
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
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: 40 }}
            >
              {trips.map((trip) => (
                <SwiperSlide key={trip.ref}>
                  <Card>
                    {trip.imageUrl && (
                      <CardMedia
                        image={trip.imageUrl}
                        title={trip.title}
                        sx={{ height: 180 }}
                      />
                    )}
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {trip.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {trip.ref}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {trip.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Container>
    </>
  );
};

export default DreamVacationPage;
