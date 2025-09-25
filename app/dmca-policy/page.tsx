"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, Mail, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DMCAPolicy() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">DMCA Policy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI Pics Prompts respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA).
            </p>
            <p className="text-muted-foreground mt-4">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            {/* Notice and Takedown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-primary mr-2" />
                    Notice and Takedown Procedure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you believe that content on AI Pics Prompts infringes your copyright, you may submit a DMCA takedown notice. We will respond promptly to valid notices in accordance with the DMCA.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Important Note:</h4>
                    <p className="text-sm text-muted-foreground">
                      Our platform primarily hosts AI-generated image prompts (text descriptions), not actual images. However, we take all intellectual property concerns seriously.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Filing a DMCA Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    Filing a DMCA Takedown Notice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    To file a DMCA takedown notice, please provide the following information:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Your physical or electronic signature</li>
                    <li>Identification of the copyrighted work claimed to have been infringed</li>
                    <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material</li>
                    <li>Your contact information, including address, telephone number, and email address</li>
                    <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
                    <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-2" />
                    DMCA Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Send your DMCA takedown notice to our designated agent:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div><strong>DMCA Agent:</strong> Legal Department</div>
                      <div><strong>Email:</strong> dmca@aipicsprompts.com</div>
                      <div><strong>Subject Line:</strong> DMCA Takedown Notice</div>
                    </div>
                  </div>
                  <Button asChild>
                    <a href="mailto:dmca@aipicsprompts.com?subject=DMCA Takedown Notice">
                      Send DMCA Notice
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Counter-Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Counter-Notice Procedure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you believe your content was removed in error, you may file a counter-notice. Your counter-notice must include:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Your physical or electronic signature</li>
                    <li>Identification of the material that was removed and its location before removal</li>
                    <li>A statement under penalty of perjury that you have a good faith belief the material was removed due to mistake or misidentification</li>
                    <li>Your name, address, telephone number, and a statement consenting to jurisdiction of the federal district court</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Repeat Infringer Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Repeat Infringer Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    AI Pics Prompts has a policy of terminating, in appropriate circumstances, users who are repeat infringers of intellectual property rights.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>False Claims Warning:</strong> Please note that filing false DMCA claims may result in legal consequences, including liability for damages and attorney fees.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    We are committed to respecting intellectual property rights and maintaining a platform that supports creativity while protecting original works. We will investigate all valid DMCA notices promptly and take appropriate action when necessary.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>For more information about the DMCA and copyright law:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>
                      <a href="https://www.copyright.gov/dmca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        U.S. Copyright Office DMCA Information
                      </a>
                    </li>
                    <li>
                      <a href="https://www.copyright.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        U.S. Copyright Office
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
