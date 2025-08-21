import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import SolarSystem from '@/components/SolarSystem/SolarSystem';
import PlanetInfoCard from '@/components/PlanetInfo/PlanetInfoCard';
import PlanetNavigation from '@/components/Navigation/PlanetNavigation';
import { solarSystemData, sunData } from '@/data/solarSystem';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedCelestialBody, setSelectedCelestialBody] = useState<{
    type: 'planet' | 'sun';
    data: any;
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleCelestialBodyClick = useCallback((body: any) => {
    setSelectedCelestialBody(body);
  }, []);

  const handlePlanetSelect = useCallback((planetId: string) => {
    const planet = solarSystemData.find(p => p.id === planetId);
    if (planet) {
      setSelectedCelestialBody({ type: 'planet', data: planet });
    }
  }, []);

  const handleSunSelect = useCallback(() => {
    setSelectedCelestialBody({ type: 'sun', data: sunData });
  }, []);

  const handleStartTour = useCallback(() => {
    setIsLoading(true);
    // Simulate tour loading
    setTimeout(() => {
      setIsLoading(false);
      // Start with Mercury for the tour
      const mercury = solarSystemData.find(p => p.id === 'mercury');
      if (mercury) {
        setSelectedCelestialBody({ type: 'planet', data: mercury });
      }
    }, 1000);
  }, []);

  const handleCloseInfo = useCallback(() => {
    setSelectedCelestialBody(null);
  }, []);

  return (
    <>
      {/* SEO Meta Elements */}
      <title>Interactive Solar System Explorer | 3D Educational Space Journey</title>
      <meta name="description" content="Explore our solar system in stunning 3D. Learn about planets, the Sun, and space with our interactive educational visualization featuring realistic orbital mechanics." />
      <meta name="keywords" content="solar system, planets, space education, 3D visualization, astronomy, interactive learning" />
      <meta property="og:title" content="Interactive Solar System Explorer" />
      <meta property="og:description" content="Journey through space with our interactive 3D solar system. Click on planets to discover fascinating facts about our cosmic neighborhood." />
      
      <div className="relative min-h-screen overflow-hidden">
        {/* Background with animated stars */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-muted">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-foreground rounded-full twinkle-animation"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Header */}
          <header className="absolute top-0 left-0 right-0 z-30 p-6">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 cosmic-glow">
                Solar System Explorer
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Journey through our cosmic neighborhood and discover the wonders of space
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Badge variant="secondary" className="cosmic-glow">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Interactive 3D
                </Badge>
                <Badge variant="secondary" className="cosmic-glow">
                  <Rocket className="h-3 w-3 mr-1" />
                  Educational
                </Badge>
              </div>
            </motion.div>
          </header>

          {/* Solar System Visualization */}
          <section className="relative z-20">
            <SolarSystem onCelestialBodyClick={handleCelestialBodyClick} />
          </section>

          {/* Navigation Panel */}
          <PlanetNavigation
            onPlanetSelect={handlePlanetSelect}
            onSunSelect={handleSunSelect}
            onStartTour={handleStartTour}
          />

          {/* Planet Information Card */}
          <PlanetInfoCard
            celestialBody={selectedCelestialBody}
            onClose={handleCloseInfo}
          />

          {/* Loading State for Tour */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Preparing Your Cosmic Journey
                </h3>
                <p className="text-muted-foreground">
                  Loading planetary data and orbital mechanics...
                </p>
              </div>
            </motion.div>
          )}

          {/* Footer Info */}
          <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-xs text-muted-foreground">
                Scroll to zoom • Drag to rotate • Click planets for details
              </p>
            </motion.div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
