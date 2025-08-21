import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, Rocket, Play } from 'lucide-react';
import { solarSystemData } from '@/data/solarSystem';

interface PlanetNavigationProps {
  onPlanetSelect: (planetId: string) => void;
  onSunSelect: () => void;
  onStartTour: () => void;
}

const PlanetNavigation: React.FC<PlanetNavigationProps> = ({
  onPlanetSelect,
  onSunSelect,
  onStartTour
}) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-6 top-6 z-40 w-72"
    >
      <Card className="bg-card/95 backdrop-blur-lg border-border cosmic-glow p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">Solar System Explorer</h2>
            <p className="text-sm text-muted-foreground">Click on any celestial body to explore</p>
          </div>

          {/* Tour Button */}
          <Button 
            className="w-full cosmic-glow" 
            onClick={onStartTour}
          >
            <Play className="h-4 w-4 mr-2" />
            Start Guided Tour
          </Button>

          {/* Sun */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Star</h3>
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-solar/10 hover:border-solar/50"
              onClick={onSunSelect}
            >
              <Sun className="h-4 w-4 mr-2 text-solar" />
              <span className="flex-1 text-left">Sun</span>
              <Badge variant="secondary" className="bg-solar/20 text-solar-foreground">
                Star
              </Badge>
            </Button>
          </div>

          {/* Planets */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Planets</h3>
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {solarSystemData.map((planet) => (
                <Button
                  key={planet.id}
                  variant="outline"
                  className="w-full justify-start hover:bg-primary/10 hover:border-primary/50"
                  onClick={() => onPlanetSelect(planet.id)}
                >
                  <div 
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: planet.color }}
                  />
                  <span className="flex-1 text-left">{planet.name}</span>
                  <div className="flex gap-1">
                    {planet.moons > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {planet.moons} 🌙
                      </Badge>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Controls Info */}
          <div className="border-t pt-4 space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Controls
            </h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>🖱️ <strong>Left click + drag:</strong> Rotate view</p>
              <p>🔍 <strong>Scroll:</strong> Zoom in/out</p>
              <p>🖱️ <strong>Right click + drag:</strong> Pan view</p>
              <p>🪐 <strong>Click planet:</strong> View details</p>
            </div>
          </div>

          {/* Mission Badge */}
          <div className="text-center pt-2">
            <Badge variant="outline" className="cosmic-glow">
              <Rocket className="h-3 w-3 mr-1" />
              Mission: Explore
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PlanetNavigation;